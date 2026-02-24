const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_super_secret_key'; // In production, move this to .env
const ADMIN_SECRET_KEY = 'ceh-admin-2024'; // Admin authentication secret key

app.use(cors());
app.use(bodyParser.json());

// In-memory user store (Replaces a database for this demo)
const users = [];

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${new Date().toLocaleString()} - ${req.method} ${req.url}`);
  next();
});

// Root route
app.get('/', (req, res) => {
  res.send('Auth Backend Running');
});

// PART 5 — REGISTER ENDPOINT
app.post('/api/auth/register', async (req, res) => {
  const { 
    fullName, regNumber, email, college, 
    department, adminRole, password, adminKey 
  } = req.body;

  // Basic validation
  if (!email || !password || !regNumber) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Check if user already exists
  const existingUser = users.find(u => u.email === email || u.regNumber === regNumber);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Validate admin key if trying to register as admin
  if (adminRole === 'admin') {
    if (!adminKey || adminKey !== ADMIN_SECRET_KEY) {
      return res.status(403).json({ message: 'Invalid Admin Access Key' });
    }
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store user with correct role
  const newUser = {
    id: users.length + 1,
    fullName,
    regNumber,
    email,
    college,
    department,
    role: adminRole === 'admin' ? 'admin' : 'student',
    isAdmin: adminRole === 'admin',
    password: hashedPassword
  };

  users.push(newUser);
  console.log(`User registered: ${email} (Role: ${newUser.role})`);

  res.status(201).json({ 
    message: 'Registration successful',
    user: {
      id: newUser.id,
      email: newUser.email,
      role: newUser.role
    }
  });
});

// PART 5 — LOGIN ENDPOINT
app.post('/api/auth/login', async (req, res) => {
  const { regNumber, password, role, adminKey } = req.body;

  // Find user by registration number
  const user = users.find(u => u.regNumber === regNumber);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // If frontend specifies a role, verify it matches user's role
  if (role && user.role !== role) {
    return res.status(401).json({ message: 'Insufficient permissions' });
  }

  // ADMIN SECRET KEY VERIFICATION - CRITICAL FOR ADMIN ACCESS
  // If user has admin role, they MUST provide the correct admin secret key
  if (user.role === 'admin' && user.role === 'admin') {
    console.log(`Admin login attempt: ${regNumber}, AdminKey provided: ${!!adminKey}`);
    if (!adminKey) {
      return res.status(403).json({ message: 'Admin secret key required' });
    }
    if (adminKey !== ADMIN_SECRET_KEY) {
      console.log(`Invalid admin key attempt: ${adminKey}`);
      return res.status(403).json({ message: 'Invalid admin key' });
    }
  }

  // Generate JWT with role information
  const token = jwt.sign(
    { id: user.id, regNumber: user.regNumber, role: user.role, isAdmin: user.role === 'admin' },
    SECRET_KEY,
    { expiresIn: '1h' }
  );

  console.log(`User logged in: ${user.email} (Role: ${user.role})`);

  // Send token + user info
  res.json({
    token,
    user: {
      id: user.id,
      userName: user.fullName,
      email: user.email,
      role: user.role
    },
    isAdmin: user.role === 'admin'
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

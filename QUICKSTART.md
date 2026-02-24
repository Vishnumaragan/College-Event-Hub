# CampusEventHub - Milestone 1 Complete ✅

## Quick Start Guide

### 1️⃣ Start the Backend
```bash
cd backend
node server.js
```
✅ Backend running on `http://localhost:3000`

### 2️⃣ Start the Frontend
```bash
cd infosys
npm start
# Or if port 4200 is busy:
npm start -- --port 4201
```
✅ Frontend running on `http://localhost:4200`

### 3️⃣ Access the Application
Open: **http://localhost:4200**

---

## 🔐 Admin Secret Key

**Admin Access Key**: `ceh-admin-2024`

Use this key to:
- Register as an Admin/Organizer
- Login as an Admin
- Access admin-only features and dashboards

---

## 🧪 Test the Complete Flow

### Register as Student (No Secret Key Needed)
1. Click **"Register"** from landing page
2. Select **"🎓 Student"** role
3. Fill in details: Name, Email, Password, etc.
4. Admin key field **will NOT appear**
5. Click Register ✅

### Register as Admin (Secret Key Required)
1. Click **"Register"** from landing page
2. Select **"🔐 Admin"** role (toggle right)
3. Admin key field **appears automatically**
4. Enter admin key: `ceh-admin-2024`
5. Click Register ✅

### Login as Student
1. Click **"Login"** from landing page
2. Select **"🎓 Student"** role
3. Admin key field **will NOT appear**
4. Enter credentials and password
5. Click Login ✅
6. Redirects to **Student Dashboard** with event browsing features

### Login as Admin
1. Click **"Login"** from landing page
2. Select **"🔐 Admin"** role
3. Admin key field **appears automatically**
4. Enter admin key: `ceh-admin-2024`
5. Click Login ✅
6. Redirects to **Admin Dashboard** with management features

---

## 🎯 Features Implemented

### ✅ User Registration
- Role selection (Student/Admin)
- Email validation
- Password matching
- Admin requires secret key (`ceh-admin-2024`)
- Glossy card design

### ✅ User Login
- Role-based UI (admin secret key appears only for admin role)
- Form validation
- Loading states
- Auto-redirect to role-specific dashboard

### ✅ Two Separate Dashboards
- **Admin Dashboard** (`/admin-dashboard`)
  - Event management console
  - Registrations management
  - Analytics view
  - Real-time metrics
  
- **Student Dashboard** (`/student-dashboard`)
  - Event discovery
  - My registrations
  - Event details
  - Quick stats

### ✅ Dark/Light Mode
- System preference detection
- Theme toggle in navbar
- Persistent theme storage
- Full dark mode support with CSS variables
- Glassmorphism effects work in both modes

### ✅ Security
- JWT token authentication
- Role-based access control (RBAC)
- Protected routes with guards
- Admin secret key validation
- Automatic logout when token expires

### ✅ Protected Routes
- `/admin-dashboard` – Admin only
- `/student-dashboard` – Student only
- Unauthorized access redirects to appropriate dashboard

---

## 📊 Architecture

### Frontend Stack
- **Framework**: Angular 17+ (Standalone Components)
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Authentication**: localStorage + JWT
- **Routing**: Angular Router with Custom Guards

### Backend Stack
- **Framework**: Express.js
- **Authentication**: JSON Web Tokens (JWT)
- **Security**: bcryptjs for password hashing
- **Admin Key**: Hardcoded (ceh-admin-2024)

### Storage
- **In-Memory**: User data (in-memory array in server.js)
- **LocalStorage**: Token, Role, Theme preference
- **Note**: In production, replace with database

---

## 🔒 How Admin Access Works

### Step 1: Admin Registration
```
User selects "Admin" role
Admin key field appears
User enters: ceh-admin-2024
Backend validates key
User stored with role: "admin"
```

### Step 2: Admin Login
```
User selects "Admin" role
Admin key field appears
User enters credentials + key: ceh-admin-2024
Backend verifies password + key
JWT token issued with isAdmin flag
Redirected to /admin-dashboard
```

### Step 3: Admin Verification
```
Browser stores localStorage:
  - token: JWT token
  - role: "admin"
  - userInfo: Admin details
roleGuard checks: role === "admin"
Access to /admin-dashboard granted
```

---

## 🎨 UI/UX Details

### Login/Register Cards
- **Glassmorphism Effect**: Frosted glass with background blur
- **Dark Mode**: Automatic color adjustment
- **Responsive**: Mobile-friendly layout

### Role Selection
- **Login**: Dropdown with emoji (🎓 Student, 🔐 Admin)
- **Register**: Toggle buttons with animated indicator
- **Admin Key Field**: Appears only when Admin role selected

### Navbar
- Brand logo with gradient
- Theme toggle (sun/moon icon)
- User profile menu
- Logout button

### Dashboards
- **Admin**: Purple-themed with management tools
- **Student**: Teal-themed with event discovery
- Both have same navbar for consistency

---

## 🧠 Key Implementation Details

### Admin Secret Key Validation
**Login Endpoint** (`POST /api/auth/login`):
```javascript
if (role === 'admin' || user.role === 'admin') {
  if (!adminKey || adminKey !== ADMIN_SECRET_KEY) {
    return res.status(403).json({ message: 'Invalid admin key' });
  }
}
```

### Role-Based Routing
**Routes** (`src/app/app.routes.ts`):
```typescript
{ 
  path: 'admin-dashboard', 
  component: AdminDashboardComponent, 
  canActivate: [authGuard, roleGuard],
  data: { role: 'admin' }
}
```

### Conditional UI (Login)
**Template** (`src/app/login/login.html`):
```html
<input *ngIf="loginData.role === 'admin'" 
  [(ngModel)]="loginData.adminKey" 
  placeholder="Enter admin secret key" />
```

---

## ✨ Next Steps

To extend beyond Milestone 1:

1. **Event Management** 
   - Admin creates/edits/deletes events
   - Student browses and registers for events

2. **Database Integration**
   - Replace in-memory storage with MongoDB/PostgreSQL
   - Persistent user data
   - Event storage

3. **Advanced Features**
   - Email notifications
   - Event analytics
   - User ratings/reviews
   - Payment integration

4. **Performance**
   - Implement caching
   - Optimize API endpoints
   - Add rate limiting

---

## 🆘 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port 3000 already in use | Kill process using: `taskkill /PID <PID> /F` |
| Port 4200 already in use | Use: `npm start -- --port 4201` |
| Build errors | Run: `npm install && npm run build` |
| Token not persisting | Check browser localStorage in DevTools |
| Can't login as admin | Verify key is exactly `ceh-admin-2024` |
| Dark mode not working | Clear localStorage and theme toggle |

---

## 📖 Documentation

For detailed testing procedures and verification, see:
- **[MILESTONE_1_VERIFICATION.md](./MILESTONE_1_VERIFICATION.md)** - Complete verification guide
- **[infosys/README.md](./infosys/README.md)** - Frontend documentation
- **[backend/server.js](./backend/server.js)** - Backend implementation

---

## 🎉 Milestone 1 Status: COMPLETE ✅

All requirements met:
- ✅ User registration with role selection
- ✅ Admin verification via secret key
- ✅ Role-based login and redirect
- ✅ Two separate dashboards
- ✅ Protected routes with guards
- ✅ Dark/light mode support
- ✅ JWT authentication
- ✅ Logout functionality

**Ready for testing and Milestone 2 development!**

---

*Last Updated: February 24, 2025*

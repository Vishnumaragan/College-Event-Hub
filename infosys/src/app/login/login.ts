import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  loginData = {
    regNumber: '',
    password: '',
    role: '',
    adminKey: ''
  };

  isLoading = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    
    // Redirect if already logged in
    if (token && role) {
      this.redirectToDashboard(role);
    }
  }

  onRoleChange() {
    // Clear admin key when role changes
    if (this.loginData.role !== 'admin') {
      this.loginData.adminKey = '';
    }
  }

  onLogin() {
    if (!this.loginData.role) {
      alert('Please select an account type');
      return;
    }

    if (!this.loginData.regNumber || !this.loginData.password) {
      alert('Please fill in all fields');
      return;
    }

    // Admin must provide secret key
    if (this.loginData.role === 'admin' && !this.loginData.adminKey) {
      alert('🔑 Admin secret key is required!');
      return;
    }

    this.isLoading = true;

    this.http.post('http://localhost:3000/api/auth/login', this.loginData)
      .subscribe({
        next: (response: any) => {
          this.isLoading = false;
          // Store authentication data
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.user.role);
          localStorage.setItem('userInfo', JSON.stringify(response.user));
          
          // Redirect based on role
          this.redirectToDashboard(response.user.role);
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Login failed', error);
          if (error.error?.message === 'Invalid admin key') {
            alert('❌ Invalid Admin Secret Key!');
          } else if (error.error?.message === 'Insufficient permissions') {
            alert('❌ You do not have admin permissions!');
          } else {
            const errorMessage = error.error?.message || 'Invalid credentials. Please try again.';
            alert(errorMessage);
          }
        }
      });
  }

  private redirectToDashboard(role: string) {
    if (role === 'admin') {
      this.router.navigate(['/admin-dashboard']);
    } else if (role === 'student') {
      this.router.navigate(['/student-dashboard']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}


import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, NgIf, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  selectedRole: 'student' | 'admin' = 'student';
  isLoading = false;
  passwordsMatch = true;

  registerData = {
    fullName: '',
    regNumber: '',
    email: '',
    college: '',
    department: '',
    adminRole: '',
    password: '',
    confirmPassword: '',
    adminKey: '',
    acceptTerms: false,
  };

  constructor(private http: HttpClient, private router: Router) {}

  getIndicatorPosition(): string {
    return this.selectedRole === 'admin' ? 'translateX(100%)' : 'translateX(0%)';
  }

  checkPasswordMatch(): void {
    this.passwordsMatch =
      this.registerData.password === this.registerData.confirmPassword;
  }

  socialSignup(provider: string): void {
    window.location.href =
      provider === 'google'
        ? 'https://accounts.google.com'
        : 'https://github.com';
  }

  onRegister(): void {
    if (!this.passwordsMatch) return;
    this.isLoading = true;
    
    // Prepare registration data with correct role
    const registrationPayload = {
      ...this.registerData,
      role: this.selectedRole === 'admin' ? 'admin' : 'student',
      adminRole: this.selectedRole === 'admin' ? 'admin' : undefined
    };
    
    // Validate: admin role must have admin key
    if (this.selectedRole === 'admin' && !this.registerData.adminKey) {
      alert('🔑 Admin access key is required for Organizer role!');
      this.isLoading = false;
      return;
    }
    
    this.http.post('http://localhost:3000/api/auth/register', registrationPayload)
      .subscribe({
        next: (response: any) => {
          this.isLoading = false;
          alert("Registration successful");
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Registration failed', error);
          const errorMessage = error.error?.message || "Registration failed";
          alert(errorMessage);
        }
      });
  }
}

import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { Login } from './login/login';
import { Register } from './register/register';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { authGuard } from './auth.guard';
import { roleGuard } from './role.guard';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  
  // Role-based dashboards
  { 
    path: 'student-dashboard', 
    component: StudentDashboardComponent, 
    canActivate: [authGuard, roleGuard],
    data: { role: 'student' }
  },
  { 
    path: 'admin-dashboard', 
    component: AdminDashboardComponent, 
    canActivate: [authGuard, roleGuard],
    data: { role: 'admin' }
  },
  
  // Legacy dashboard route - redirects based on role
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [authGuard] 
  },
  
  // Catch-all redirect
  { path: '**', redirectTo: '' }
];

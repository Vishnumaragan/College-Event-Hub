import { inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot } from '@angular/router';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');
  const requiredRole = route.data['role'];

  // Check if user is authenticated
  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  // Check if user has the required role
  if (requiredRole && userRole !== requiredRole) {
    console.warn(`Access denied: User role '${userRole}' does not match required role '${requiredRole}'`);
    // Redirect to appropriate dashboard based on actual role
    if (userRole === 'admin') {
      router.navigate(['/admin-dashboard']);
    } else {
      router.navigate(['/student-dashboard']);
    }
    return false;
  }

  return true;
};

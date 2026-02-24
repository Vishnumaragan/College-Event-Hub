import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styles: [`
    :host { display: block; }
    .animate-in { 
      animation: enter 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; 
    }
    @keyframes enter { 
      from { opacity: 0; transform: translateY(20px); filter: blur(10px); } 
      to { opacity: 1; transform: translateY(0); filter: blur(0); } 
    }
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `]
})
export class DashboardComponent {
  activeTab = 'overview';

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
}
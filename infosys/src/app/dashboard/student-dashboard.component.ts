import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink],
  template: `
    <app-navbar></app-navbar>
    
    <div class="relative min-h-screen bg-gradient-to-br from-purple-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 flex flex-col font-sans overflow-x-hidden">
      
      <div class="hub-overlay"></div>

      <main class="relative z-10 flex-grow p-6 md:p-12 max-w-7xl mx-auto w-full space-y-12">
        
        <!-- Hero Section -->
        <div class="space-y-4">
          <nav class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            <span class="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">Dashboard</span>
            <span class="text-gray-300 dark:text-gray-600">/</span>
            <span class="text-gray-900 dark:text-white">My Events</span>
          </nav>
          
          <div class="space-y-3">
            <h1 class="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
              Welcome Back! 👋
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Discover and participate in exciting events from colleges nationwide
            </p>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div class="card-pro p-8 space-y-4">
            <div class="flex justify-between items-start">
              <div class="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <span class="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">Active</span>
            </div>
            <div class="space-y-1">
              <p class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Events Registered</p>
              <p class="text-4xl font-black text-gray-900 dark:text-white">4</p>
            </div>
          </div>

          <div class="card-pro p-8 space-y-4">
            <div class="flex justify-between items-start">
              <div class="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><path d="M12 1v6"/><path d="M12 17v6"/><path d="m4.22 4.22 4.24 4.24"/><path d="m15.54 15.54 4.24 4.24"/><path d="M1 12h6"/><path d="M17 12h6"/><path d="m4.22 19.78 4.24-4.24"/><path d="m15.54 8.46 4.24-4.24"/></svg>
              </div>
              <span class="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">Live</span>
            </div>
            <div class="space-y-1">
              <p class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Events Available</p>
              <p class="text-4xl font-black text-gray-900 dark:text-white">24</p>
            </div>
          </div>

          <div class="card-pro p-8 space-y-4">
            <div class="flex justify-between items-start">
              <div class="p-3 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <span class="text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">Upcoming</span>
            </div>
            <div class="space-y-1">
              <p class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Participated</p>
              <p class="text-4xl font-black text-gray-900 dark:text-white">2</p>
            </div>
          </div>

        </div>

        <!-- Featured Events Section -->
        <div class="space-y-6">
          <div class="space-y-2">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Upcoming Events</h2>
            <p class="text-gray-600 dark:text-gray-300">Events happening near you</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Sample Event Card -->
            <div class="card-pro p-8 space-y-6 group hover:border-purple-300 dark:hover:border-purple-600">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Tech Hackathon 2024</h3>
                  <div class="flex gap-3 flex-wrap">
                    <span class="text-xs font-bold bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full">Hackathon</span>
                    <span class="text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">48 Hours</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-300">Join competitive programming and build amazing projects with students from 20+ colleges.</p>
              <div class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>📍 Central Hub Campus</p>
                <p>📅 March 15-17, 2024</p>
                <p>👥 150+ Participants</p>
              </div>
              <button class="w-full btn-primary py-2.5">View & Register</button>
            </div>

            <div class="card-pro p-8 space-y-6 group hover:border-teal-300 dark:hover:border-teal-600">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Annual Sports Festival</h3>
                  <div class="flex gap-3 flex-wrap">
                    <span class="text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full">Sports</span>
                    <span class="text-xs font-bold bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-3 py-1 rounded-full">3 Days</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-300">Participate in cricket, football, badminton, and more sports events with colleges across the region.</p>
              <div class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>📍 Sports Complex, Main Campus</p>
                <p>📅 April 5-7, 2024</p>
                <p>👥 300+ Participants</p>
              </div>
              <button class="w-full btn-secondary py-2.5">View & Register</button>
            </div>
          </div>
        </div>

      </main>
    </div>

    <style>
      :host {
        --ceh-bg: 210 27% 98%;
        --ceh-surface: 0 0% 100%;
      }
      :host.dark {
        --ceh-bg: 220 13% 10%;
        --ceh-surface: 220 13% 14%;
      }
    </style>
  `
})
export class StudentDashboardComponent implements OnInit {
  studentName: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const role = localStorage.getItem('role');
    if (role !== 'student') {
      this.router.navigate(['/login']);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-admin-dashboard',
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
            <span class="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">Admin</span>
            <span class="text-gray-300 dark:text-gray-600">/</span>
            <span class="text-gray-900 dark:text-white">Management Hub</span>
          </nav>
          
          <div class="space-y-3">
            <h1 class="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
              Event Management Console 🎯
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Manage events, registrations, and view real-time analytics
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 mt-6">
            <button class="btn-primary px-8 py-3">
              + Create New Event
            </button>
            <button class="btn-secondary px-8 py-3">
              📊 View Analytics
            </button>
          </div>
        </div>

        <!-- Key Metrics -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <div class="card-pro p-8 space-y-4">
            <div class="flex justify-between items-start">
              <div class="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <span class="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">+15%</span>
            </div>
            <div class="space-y-1">
              <p class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Active Events</p>
              <p class="text-4xl font-black text-gray-900 dark:text-white">12</p>
            </div>
          </div>

          <div class="card-pro p-8 space-y-4">
            <div class="flex justify-between items-start">
              <div class="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <span class="text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">Peak</span>
            </div>
            <div class="space-y-1">
              <p class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Total Registrations</p>
              <p class="text-4xl font-black text-gray-900 dark:text-white">542</p>
            </div>
          </div>

          <div class="card-pro p-8 space-y-4">
            <div class="flex justify-between items-start">
              <div class="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full">98%</span>
            </div>
            <div class="space-y-1">
              <p class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Completion Rate</p>
              <p class="text-4xl font-black text-gray-900 dark:text-white">98%</p>
            </div>
          </div>

          <div class="card-pro p-8 space-y-4">
            <div class="flex justify-between items-start">
              <div class="p-3 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <span class="text-xs font-bold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-3 py-1 rounded-full">3 Pending</span>
            </div>
            <div class="space-y-1">
              <p class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Pending Reviews</p>
              <p class="text-4xl font-black text-gray-900 dark:text-white">3</p>
            </div>
          </div>

        </div>

        <!-- Events Management Table -->
        <div class="space-y-6">
          <div class="space-y-2">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Manage Events</h2>
            <p class="text-gray-600 dark:text-gray-300">View and manage all events organized by your institution</p>
          </div>

          <div class="card-pro overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400">Event Name</th>
                    <th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400">Type</th>
                    <th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400">Date</th>
                    <th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400">Registrations</th>
                    <th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400">Status</th>
                    <th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td class="px-6 py-4">
                      <p class="font-bold text-gray-900 dark:text-white">Tech Hackathon</p>
                      <p class="text-xs text-gray-600 dark:text-gray-400">Central Hub</p>
                    </td>
                    <td class="px-6 py-4"><span class="text-xs font-bold bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full">Hackathon</span></td>
                    <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Mar 15-17</td>
                    <td class="px-6 py-4 font-bold text-gray-900 dark:text-white">156</td>
                    <td class="px-6 py-4"><span class="text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full">Active</span></td>
                    <td class="px-6 py-4">
                      <button class="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline">Edit</button>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td class="px-6 py-4">
                      <p class="font-bold text-gray-900 dark:text-white">Sports Festival</p>
                      <p class="text-xs text-gray-600 dark:text-gray-400">Sports Complex</p>
                    </td>
                    <td class="px-6 py-4"><span class="text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full">Sports</span></td>
                    <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Apr 5-7</td>
                    <td class="px-6 py-4 font-bold text-gray-900 dark:text-white">342</td>
                    <td class="px-6 py-4"><span class="text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">Upcoming</span></td>
                    <td class="px-6 py-4">
                      <button class="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline">Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
export class AdminDashboardComponent implements OnInit {
  adminName: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
      this.router.navigate(['/login']);
    }
  }
}

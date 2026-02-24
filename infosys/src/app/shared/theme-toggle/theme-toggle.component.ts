import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="toggleTheme()" 
      class="fixed right-6 md:right-8 bottom-6 md:bottom-8 z-[100] group"
      [attr.aria-label]="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'">
      <!-- Glow Effect -->
      <div class="absolute -inset-1.5 bg-gradient-to-r from-purple-500 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      
      <!-- Button Base -->
      <div class="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-3 md:p-4 rounded-xl shadow-lg dark:shadow-2xl transition-all duration-300 group-hover:shadow-xl group-active:scale-90 flex items-center justify-center">
        <div class="relative w-6 h-6">
          <!-- Sun Icon (for dark mode, shows to switch to light) -->
          <svg *ngIf="isDarkMode" 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            class="text-yellow-500 animate-in zoom-in duration-500">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <!-- Moon Icon (for light mode, shows to switch to dark) -->
          <svg *ngIf="!isDarkMode" 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            class="text-gray-800 animate-in zoom-in duration-500">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </div>
        
        <!-- Tooltip -->
        <span class="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold uppercase tracking-widest px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-700 dark:border-gray-300 shadow-lg whitespace-nowrap">
          {{ isDarkMode ? 'Light' : 'Dark' }}
        </span>
      </div>
    </button>
  `,
  styles: [`
    button {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  `]
})
export class ThemeToggleComponent implements OnInit {
  isDarkMode = false;

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    
    // Check system preference if no saved theme
    if (!savedTheme) {
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      this.isDarkMode = savedTheme === 'dark';
    }
    
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    const html = document.documentElement;
    const body = document.body;
    
    if (this.isDarkMode) {
      html.classList.add('dark');
      body.classList.remove('body-light');
      body.classList.add('body-dark');
    } else {
      html.classList.remove('dark');
      body.classList.remove('body-dark');
      body.classList.add('body-light');
    }
  }
}

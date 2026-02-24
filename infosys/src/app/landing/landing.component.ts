import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.component.html',
  styles: [`
    :host {
      display: block;
      background: hsl(var(--p-bg));
      min-height: 100vh;
      overflow: hidden;
    }
    .mesh-gradient {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(at 10% 10%, hsla(var(--p-primary) / 0.15) 0px, transparent 50%),
        radial-gradient(at 90% 10%, hsla(var(--p-secondary) / 0.15) 0px, transparent 50%),
        radial-gradient(at 50% 90%, hsla(var(--p-accent) / 0.1) 0px, transparent 50%);
      filter: blur(80px);
      z-index: 0;
    }
    .floating-anim {
      animation: float 6s ease-in-out infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(2deg); }
    }
    .text-glow {
      text-shadow: 0 0 30px hsla(var(--p-primary) / 0.5);
    }
    .cyber-card {
      background: var(--p-glass-bg);
      backdrop-filter: blur(20px);
      border: 1px solid var(--p-glass-border);
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .cyber-card:hover {
      border-color: hsla(var(--p-primary) / 0.5);
      box-shadow: 0 0 40px hsla(var(--p-primary) / 0.1);
      transform: translateY(-10px) scale(1.02);
    }
  `]
})
export class LandingComponent {}

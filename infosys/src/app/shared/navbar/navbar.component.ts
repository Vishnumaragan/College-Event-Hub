import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styles: [`
    :host { display: block; }
    .glass {
      background: var(--ceh-glass-bg);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--ceh-glass-border);
      box-shadow: var(--ceh-shadow-lg);
    }
    .grad-premium {
      background: linear-gradient(135deg, hsl(var(--ceh-primary)) 0%, hsl(var(--ceh-accent)) 100%);
    }
  `]
})
export class NavbarComponent {}
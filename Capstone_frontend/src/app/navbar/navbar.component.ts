import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  router: any;

  goToProfile() {
    this.router.navigate(['/profile']);
    throw new Error('Method not implemented.');
  }
  isCollapsed = true;

  // Method to confirm logout
  confirmLogout() {
    const confirmed = confirm('Are you sure you want to logout?');
    if (confirmed) {
      this.onLogout();
    }
  }

  // Actual logout logic
  onLogout() {
    // Your logout logic here, e.g., clear session, redirect to login
    console.log('User logged out');
  }
}

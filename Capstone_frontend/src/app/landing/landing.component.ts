import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  hoveredCardIndex: number | null = null; // Tracks the card being hovered

  // This function will be called when a card is clicked
  selectCard(index: number) {
    this.hoveredCardIndex = index;
  }

  // Called when mouse enters a card
  onCardHover(index: number) {
    this.hoveredCardIndex = index;
  }

  // Called when mouse leaves a card
  onCardLeave() {
    this.hoveredCardIndex = null; // Reset when mouse leaves
  }

  constructor(private router:Router){}

  goToRegister() {
    this.router.navigate(['/register']);
    // Add logic to navigate to the register page
    console.log('Navigate to register page');
  }
}

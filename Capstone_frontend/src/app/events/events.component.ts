import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  selectedEvent: string | null = null;

  // Function to select an event and highlight it
  selectEvent(eventName: string) {
    this.selectedEvent = eventName;
  }

  // Listen for clicks outside the component to reset the highlight
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const targetElement = event.target as HTMLElement;
    const isClickInside = targetElement.closest('.event-card');
    if (!isClickInside) {
      this.selectedEvent = null;  // Reset selection when clicked outside the events
    }
  }

  // Navigate to different event details
  navigateTo(event: string) {
    // Implement navigation logic here (e.g., using Router)
    console.log(`Navigating to ${event}`);
  }

}

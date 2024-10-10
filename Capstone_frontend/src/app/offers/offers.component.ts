import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

// Mock offer data structure
interface Offer {
  title: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  shopId: string = 'Bakery'; // Example shop ID, this can be dynamic
  offers = [
    {
      title: '10% Off on Cakes',
      description: 'Enjoy a delicious cake with 10% off for all orders above Rs.30.',
      price: 27 // Original price is Rs.30
    },
    {
      title: '15% Off on Fresh Breads',
      description: 'Grab your favorite fresh bread with a 15% discount this week only!',
      price: 8.5 // Original price is Rs.10
    },
    {
      title: 'Buy 1 Get 1 Free on Cookies',
      description: 'Buy one dozen cookies and get another one free! Perfect for sharing.',
      price: 12 // Original price for 1 dozen
    },
    {
      title: '5% Off on Groceries',
      description: 'Get a 5% discount on your grocery bill over Rs.50.',
      price: 47.5 // Original price is Rs.50
    },
    {
      title: 'Special Offer on Organic Fruits',
      description: 'Enjoy 20% off on all organic fruits every Sunday!',
      price: 24 // Original price is Rs.30
    },
    {
      title: '15% Off on Unique Handcrafted Items',
      description: 'Discover beautiful handcrafted items with a 15% discount.',
      price: 17 // Original price is Rs.20
    }
  ];

  onCardHover() {
    // Logic when the card is hovered can be added here if needed
    console.log('Card hovered');
  }

  onCardLeave() {
    // Logic when the card is left can be added here if needed
    console.log('Card left');
  }
}

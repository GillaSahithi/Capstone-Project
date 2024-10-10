import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Product[] = [
    {
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with creamy frosting.',
      price: 99,
      category: 'Bakery',
      imageUrl: '/assets/chocolate cake.jpg'
    },
    {
      name: 'Croissant',
      description: 'Flaky and buttery croissant.',
      price: 299,
      category: 'Bakery',
      imageUrl: '/assets/croissants.jpg'
    },
    {
      name: 'Fancy Watch',
      description: 'Elegant watch with leather strap.',
      price: 1999,
      category: 'Fancy Store',
      imageUrl: '/assets/watch.jpg'
    },
    {
      name: 'Designer Handbag',
      description: 'Stylish handbag for all occasions.',
      price: 29999,
      category: 'Fancy Store',
      imageUrl: '/assets/handbag.jpg'
    }
  ];

}

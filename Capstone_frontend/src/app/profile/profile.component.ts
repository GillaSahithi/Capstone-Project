import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  bio: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userProfile: UserProfile = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  editMode: boolean = false;

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  saveProfile() {
    // Logic to save the profile (e.g., call a service)
    this.editMode = false;
    console.log('Profile saved:', this.userProfile);
  }

}

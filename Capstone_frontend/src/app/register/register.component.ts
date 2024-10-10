import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registrationForm: FormGroup;
  selectedRole: string | null = null;

  constructor(private fb: FormBuilder) {
    // Initialize the form group with controls
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]], 
      address: ['', Validators.required],
      vendorName: [''],
      vendorEmail: [''],
      vendorPhoneNumber: [''],
      vendorAddress: ['']
    }, { validators: this.passwordMatchValidator });
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // Utility function to check if a form field is invalid
  isFieldInvalid(field: string): boolean {
    const control = this.registrationForm.get(field);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  onRoleChange(): void {
    this.selectedRole = this.registrationForm.get('role')?.value;
    // Reset vendor fields if the selected role changes to customer
    if (this.selectedRole === 'customer') {
      this.registrationForm.patchValue({
        vendorName: '',
        vendorEmail: '',
        vendorPhoneNumber: '',
        vendorAddress: ''
      });
    }
  } 

  // Form submission handler
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}

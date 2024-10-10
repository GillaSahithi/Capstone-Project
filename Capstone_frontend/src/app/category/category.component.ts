import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categoryForm: FormGroup;
  categories: { id: string; name: string; description: string }[] = []; 

  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  addCategory() {
    if (this.categoryForm.valid) {
      const newCategory = {
        id: Math.random().toString(36).substring(2), 
        name: this.categoryForm.value.name,
        description: this.categoryForm.value.description,
      };
      this.categories.push(newCategory);
      this.categoryForm.reset(); 
    }
  }

  deleteCategory(id: string) {
    this.categories = this.categories.filter(category => category.id !== id);
  }

}

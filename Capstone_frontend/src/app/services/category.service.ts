import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';  // Import your Category model
import { Products } from '../models/products.model';    // Import your Product model

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://localhost:5003/api/categories'; // URL to your backend Category API

  constructor(private http: HttpClient) {}

  // POST: Create a new category
  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.apiUrl}`, category);
  }

  // GET: Fetch category by ID
  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }

  // GET: Fetch all categories
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  // PUT: Update category by ID
  updateCategory(id: string, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/update/${id}`, category);
  }

  // DELETE: Delete category by ID
  deleteCategory(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // GET: Get products by category ID
  getProductsByCategoryId(id: string): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiUrl}/${id}/products`);
  }
}

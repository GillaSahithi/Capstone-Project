import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';  // Define your customer model
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:5001/api/customer';  // Base URL for Spring Boot Customer API

  constructor(private http: HttpClient) { }

  // POST: Register a new customer
  registerCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}/register`, customer);
  }

  // POST: Login customer
  loginCustomer(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, password });
  }

  // GET: Get customer by ID
  getCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }

  // GET: Get customer by email
  getCustomerByEmail(email: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/email/${email}`);
  }

  // PUT: Update customer by ID
  updateCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/${id}`, customer);
  }

  // DELETE: Delete customer by ID
  deleteCustomer(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // GET: Get customer email by ID
  getCustomerEmailById(id: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/${id}/email`);
  }

  // GET: Get orders by customer ID
  getOrdersByCustomerId(customerId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${customerId}/orders`);
  }
}

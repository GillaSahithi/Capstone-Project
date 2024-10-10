import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Events } from '../models/events.model';  // Import the Event model

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'http://localhost:5003/api/events';  // Your Spring Boot API base URL

  constructor(private http: HttpClient) { }

  // POST: Create a new event
  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.apiUrl}`, event);
  }

  // GET: Get all events
  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}`);
  }

  // GET: Get events by vendorId
  getEventsByVendorId(vendorId: string): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/vendor/${vendorId}`);
  }

  // PUT: Update an event by ID
  updateEvent(id: string, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrl}/${id}`, event);
  }

  // DELETE: Delete an event by ID
  deleteEvent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

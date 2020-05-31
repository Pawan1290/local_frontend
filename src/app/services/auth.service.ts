import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  signup(data) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
}

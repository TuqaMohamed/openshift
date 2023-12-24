import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private apiUrl =environment.apiUrl; 
  constructor(private http: HttpClient) {}

  signUp(Name: string, Email: string, Password: string, UserType: string): Observable<any> {
    const user = { Name, Email, Password, UserType };
    console.log('Request payload:', user);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Constructed URL:', `${this.apiUrl}/signup`);
    return this.http.post(`${this.apiUrl}/signup`, user);
  }
}
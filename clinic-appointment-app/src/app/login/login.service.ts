import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpErrorResponse} from '@angular/common/http';
import { Observable ,tap} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl=environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(Email: string, Password: string): Observable<any> {
    const user = { Email, Password };
    console.log('Request payload:', user);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Constructed URL:', `${this.apiUrl}/signup`);
    return this.http.post(`${this.apiUrl}/signin`, user);
  }
}
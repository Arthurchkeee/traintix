import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}
  login(credentials: { username: string; password: string }) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true,
    };
    return this.http.post<{ accessToken: string }>(
      `http://localhost:8080/api/auth/login`,
      credentials,
      httpOptions
    );
  }
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const isAuth = token && !this.jwtHelper.isTokenExpired(token);
    return (isAuth ?? false) as boolean;
  }
}

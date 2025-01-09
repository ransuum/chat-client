import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {AuthResponse, SignInRequest} from '../models/auth-request';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'access_token';
  private readonly USER_KEY = 'user_name';

  constructor(private http: HttpClient) {}

  login(credentials: SignInRequest): Observable<AuthResponse> {
    console.log('Login attempt with:', { email: credentials.email });

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<AuthResponse>('/user/sign-in', credentials, { headers })
      .pipe(
        tap(response => {
          console.log('Login response received:', response);
          if (response.access_token) {
            this.setAccessToken(response.access_token);
            this.setUserName(response.userName);
          }
        }),
        catchError(error => {
          console.error('Login error details:', error);
          if (error.status === 401) {
            throw new Error('Invalid email or password');
          } else if (error.status === 400) {
            throw new Error(error.error?.message || 'Invalid request');
          } else {
            throw new Error('Server error. Please try again later.');
          }
        })
      );
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private setAccessToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getUserName(): string | null {
    return localStorage.getItem(this.USER_KEY);
  }

  private setUserName(userName: string): void {
    localStorage.setItem(this.USER_KEY, userName);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }
}

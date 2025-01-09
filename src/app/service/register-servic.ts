import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthResponse, SignUpRequest} from '../models/auth-request';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServic {
  private readonly TOKEN_KEY = 'access_token';
  constructor(private http: HttpClient) {}

  register(signUpData: SignUpRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/user/sign-up', signUpData)
      .pipe(
        tap(response => {
          this.setAccessToken(response.access_token);
        })
      );
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private setAccessToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getAuthHeader(): HttpHeaders {
    const token = this.getAccessToken();
    return new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}

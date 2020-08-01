import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  signUp(user) {
    return this.http.post<any>(`${this.baseUrl}/signup`, user);
  }

  singIn(user) {
    return this.http.post<any>(`${this.baseUrl}/signin`, user)
  }

  loggedIn() {
    if (sessionStorage.getItem('token')) {
      return true;
    }
  }

  getToken(){
    return sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.removeItem('token');
  }

}

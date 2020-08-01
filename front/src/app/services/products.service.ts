import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>(`${this.baseUrl}/products`);
  }

  getPrivateProduct(){
    return this.http.get<any>(`${this.baseUrl}/privateProducts`);
  }
}

import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http'

import { Observable, map } from 'rxjs';
import { Product } from '../model/product.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  updateProducts(id: number): Observable<Product[]> {
    let p = this.http.get<Product>(`${this.apiUrl}/${id}`);
    console.log(p);
    return this.http.get<Product[]>(this.apiUrl);
  }

  deleteData(data: Product) {
    return this.http.delete(`${this.apiUrl}/${data.id}`);
  }

  updateData(data: Product): any{
    return {products: this.http.put<Product>(`${this.apiUrl}/${data.id}`, data, httpOptions), id: Number(0)};
  }

  saveProducts(data: Product[]): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}`, data, httpOptions);
  }
}

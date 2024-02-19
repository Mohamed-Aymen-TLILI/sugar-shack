import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Product} from "./product";
import {CartItem} from "./CartItem";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrlProducts = 'https://us-central1-maple-grove-349221.cloudfunctions.net/maplr-sugar-bush/products';
  private apiUrlProductById = 'https://us-central1-maple-grove-349221.cloudfunctions.net/maplr-sugar-bush/products/';
  private apiUrlProductOrder = 'https://us-central1-maple-grove-349221.cloudfunctions.net/maplr-sugar-bush/order';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<any[]>(this.apiUrlProducts);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(this.apiUrlProductById + id);
  }

  order(cartItems: CartItem[]): Observable<any> {
    const orderBody = cartItems.map(item => ({ productId: item.id, qty: item.quantity }));
    return this.http.post(this.apiUrlProductOrder, orderBody);
  }
}

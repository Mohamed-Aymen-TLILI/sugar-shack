import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import {Observable} from "rxjs";

import {ProductService} from "../shared/product.service";
import {transformProductToCartItem} from "../shared/CartItem";
import {AddToCart} from "../shared/store/cart-action";
import {Product} from "../shared/product";
import {CartState, CartStateModel} from "../shared/store/cart-state";





@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {

  @Select(CartState) cartItems$: Observable<CartStateModel> | undefined;
  dataSource = new MatTableDataSource<any>();
  isLoading = true;
  selectedType: string | null = null;

  constructor(private store: Store, private router: Router, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (products) => {
        this.dataSource.data = products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  getBase64Image(base64Image: string): string {
    return `data:image/png;base64,${base64Image}`;
  }

  filterByType(): void {
    if (this.selectedType) {
      this.dataSource.filter = this.selectedType.trim().toLowerCase();
    }
  }

  addToCart(event: Event, product: Product) {
    event.stopPropagation();
    this.store.dispatch(new AddToCart(transformProductToCartItem(product)));
  }

  findProductById(id: string) {
    this.router.navigate(['/product/' + id]);
  }

}

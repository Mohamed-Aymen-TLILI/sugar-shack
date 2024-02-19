import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Store} from "@ngxs/store";

import {Product} from "../shared/product";
import {ProductService} from "../shared/product.service";
import {AddToCart} from "../shared/store/cart-action";
import {transformProductToCartItem} from "../shared/CartItem";



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail-component.html',
  styleUrls: ['./product-detail-component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private store: Store, private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      if (productId) {
        this.productService.getProductById(productId).subscribe(product => {
          this.product = product;
        });
      }
    });
  }

  getBase64Image(image: string): string {
    return 'data:image/png;base64,' + image;
  }

  addToCart(product: Product) {
    this.store.dispatch(new AddToCart(transformProductToCartItem(product)));
  }
}

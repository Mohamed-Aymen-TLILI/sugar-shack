import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { Select, Store } from '@ngxs/store';
import {MatSnackBar} from "@angular/material/snack-bar";
import { Observable } from 'rxjs';

import {CartState, CartStateModel} from "../shared/store/cart-state";
import {AddToCart, ClearCart, ReduceQuantity, RemoveFromCart} from "../shared/store/cart-action";
import {CartItem} from "../shared/CartItem";
import {ProductService} from "../shared/product.service";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Select(CartState) cartItems$: Observable<CartStateModel> | undefined;
  items: CartItem[] = []

  constructor(private snackBar: MatSnackBar,private store: Store, private productService: ProductService, private router: Router) {
    this.cartItems$?.subscribe(cartState => {
      this.items = cartState.items;
    });
  }

  removeFromCart(productId: string) {
    this.store.dispatch(new RemoveFromCart(productId));
  }

  addToCart(product: CartItem) {
    this.store.dispatch(new AddToCart(product));
  }

  reduceFromCart(productId: string) {
    this.store.dispatch(new ReduceQuantity(productId));
  }

  getTotalPrice(items: CartItem[]): number {
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
    return parseFloat(totalPrice.toFixed(2));
  }

  order() {
    if (this.items.length > 0) {
      this.productService.order(this.items).subscribe(
          () => {
            this.store.dispatch(new ClearCart());
            this.router.navigate(['/products']);
            this.snackBar.open('La commande a été validé', 'close')
          },
          (error) => {
            this.snackBar.open('Erreur lors de la commande:' + error, 'close')
          }
      );
    }
  }
}

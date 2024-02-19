import { Component } from '@angular/core';
import {Select} from "@ngxs/store";
import {CartState, CartStateModel} from "../store/cart-state";
import {Observable} from "rxjs";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    @Select(CartState) cartItems$: Observable<CartStateModel> | undefined;
    items: number = 0;
    constructor() {
        this.cartItems$?.subscribe(cartState => {
            this.items = cartState.items.length;
        });
    }
}

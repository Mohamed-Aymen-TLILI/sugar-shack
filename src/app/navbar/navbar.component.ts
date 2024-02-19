import { Component } from '@angular/core';
import {Select} from "@ngxs/store";
import {Observable} from "rxjs";

import {CartState, CartStateModel} from "../shared/store/cart-state";


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

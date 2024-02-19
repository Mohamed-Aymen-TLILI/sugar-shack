import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductListComponentComponent} from "./product-list-component/product-list-component.component";
import {ProductDetailComponent} from "./product-detail-component/product-detail-component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  { path: 'products', component: ProductListComponentComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule { }

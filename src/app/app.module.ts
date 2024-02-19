import { NgModule } from '@angular/core';
import {NgxsModule} from "@ngxs/store";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import {ProductDetailComponent} from "./product-detail-component/product-detail-component";
import {CartState} from "./shared/store/cart-state";
import {NavbarComponent} from "./navbar/navbar.component";
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponentComponent,
    ProductDetailComponent,
    NavbarComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatProgressBarModule,
    NgxsModule.forRoot([CartState]),
    RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

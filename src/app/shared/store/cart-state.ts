import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Action, Selector, State, StateContext} from "@ngxs/store";

import {CartItem} from "../CartItem";
import {AddToCart, ClearCart, ReduceQuantity, RemoveFromCart} from "./cart-action";



export interface CartStateModel {
  items: CartItem[];
}

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    items: [],
  },
})

@Injectable()
export class CartState {

  constructor(private snackBar: MatSnackBar) {
  }
  @Selector()
  static cartItems(state: CartStateModel): CartItem[] {
    return state.items;
  }

  @Action(AddToCart)
  addToCart(ctx: StateContext<CartStateModel>, action: AddToCart) {
    const state = ctx.getState();
    const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);

    if (existingItemIndex !== -1) {
      const updatedItems = [...state.items];
      const existingItem = updatedItems[existingItemIndex];
      const newQuantity = existingItem.quantity + 1;

      if (newQuantity <= existingItem.maxQty) {
        existingItem.quantity = newQuantity;
        this.snackBar.open(`La quantité de votre article ${action.payload.name} a été augmentée.`,'', {
          duration: 1000,
          verticalPosition: 'bottom',
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        ctx.setState({ ...state, items: updatedItems });
      } else {
        this.snackBar.open(`Impossible d'ajouter plus que la quantité maximale pour le produit: ${action.payload.name}`,'', {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: ['mat-toolbar', 'mat-warn']
        });
      }
    } else {
      this.snackBar.open(`l'article ${action.payload.name} a été ajouté à votre panier.`,'', {
        duration: 1000,
        verticalPosition: 'bottom',
        panelClass: ['mat-toolbar', 'mat-primary']
      });
      ctx.setState({ ...state, items: [...state.items, action.payload] });
    }
  }

  @Action(ReduceQuantity)
  reduceQuantity(ctx: StateContext<CartStateModel>, action: ReduceQuantity) {
    const state = ctx.getState();
    const existingItemIndex = state.items.findIndex(item => item.id === action.productId);

    if (existingItemIndex !== -1) {
      const updatedItems = [...state.items];
      const existingItem = updatedItems[existingItemIndex];

      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        updatedItems.splice(existingItemIndex, 1);
      }

      ctx.setState({ ...state, items: updatedItems });
    }
  }

  @Action(RemoveFromCart)
  removeFromCart(ctx: StateContext<CartStateModel>, action: RemoveFromCart) {
    const state = ctx.getState();
    const updatedItems = state.items.filter(item => item.id !== action.productId);
    ctx.setState({ ...state, items: updatedItems });
  }

  @Action(ClearCart)
  clearCart(ctx: StateContext<CartStateModel>) {
    const state = ctx.getState();
    ctx.setState({ ...state, items: [] });
  }
}

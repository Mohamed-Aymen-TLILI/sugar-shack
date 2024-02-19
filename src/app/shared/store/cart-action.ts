import {CartItem} from "../CartItem";

export class AddToCart {
  static readonly type = '[Cart] Add to Cart';
  constructor(public payload: CartItem) {}
}

export class RemoveFromCart {
  static readonly type = '[Cart] Remove from Cart';
  constructor(public productId: string) {}
}

export class ReduceQuantity {
  static readonly type = '[Cart] Reduce Quantity';
  constructor(public productId: string) {}
}

export class ClearCart {
  static readonly type = '[Cart] Clear Cart';
}

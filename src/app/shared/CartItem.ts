import {Product} from "./product";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  maxQty: number;
}

export function transformProductToCartItem(product: Product): CartItem {
  let cartItem: CartItem = {
    id: '',
    name: '',
    price: 0,
    quantity: 0,
    maxQty: 0
  };

  if (product.maxQty != null) {
    cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      maxQty: parseInt(product.maxQty)
    };
  } else if (product.stock != null) {
    cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      maxQty: parseInt(product.stock)
    };
  }
  return cartItem;
}

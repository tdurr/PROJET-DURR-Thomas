import { CartItem } from './../../../models/cart-item';
import { AddToCart, RemoveFromCart, EmptyCart, LessQuantity } from '../../../store/actions/cart-action';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { CartState } from '../../../store/states/cart-state';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})

export class ProductCartComponent implements OnInit {

  public items: Observable<CartItem[]>;
  public netWorth: Observable<number>;
  public nbOfItems: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.items = this.store.select(state => state.cart.items);
    this.netWorth = this.store.select(CartState.getCartValue);
    this.nbOfItems = this.store.select(CartState.getNbOfItems);
  }

  public EmptyCart(): void {
    this.store.dispatch(new EmptyCart());
  }

  public LessQuantity(i: CartItem): void {
    this.store.dispatch(new LessQuantity(i));
  }

  public RemoveFromCart(i: CartItem): void {
    this.store.dispatch(new RemoveFromCart(i));
  }

  public AddToCart(i : CartItem) : void {
    this.store.dispatch( new AddToCart(i));
  }
}
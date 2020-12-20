import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckoutService } from '../service/checkout.service';
import { Order } from '../../../models/Order';
import { OrderLine } from '../../../models/OrderLine';
import { Store } from '@ngxs/store';
import { CartState } from '../../../store/states/cart-state';
import { ClientState } from '../../../store/states/client-state';
import { CartItem } from './../../../models/cart-item';
import { Observable, Subscription } from 'rxjs';
import { EmptyCart } from '../../../store/actions/cart-action';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  public cartItems: Observable<CartItem[]>;
  public cartWorth: number;
  public login: string;
  public responseObs: Observable<{success: boolean}>;
  private subscription: Subscription = null;

  checkoutForm = new FormGroup ({
    numeroCarte : new FormControl('', [Validators.required, numeroCarteValidator]),
    validiteMois : new FormControl('', [Validators.required, validiteMoisValidator]),
    validiteAnnee : new FormControl('', [Validators.required, validiteAnneeValidator]),
    cvc : new FormControl('', [Validators.required, cvcValidator])
  });

  get numeroCarte(): AbstractControl {
    return this.checkoutForm.get('numeroCarte');
  }

  get validiteMois(): AbstractControl {
    return this.checkoutForm.get('validiteMois');
  }

  get validiteAnnee(): AbstractControl {
    return this.checkoutForm.get('validiteAnnee');
  }

  get cvc(): AbstractControl {
    return this.checkoutForm.get('cvc');
  }
  
  constructor(private router: Router, private checkoutService: CheckoutService, private store: Store) { 
   }

  ngOnInit(): void {
    this.cartItems = this.store.select(state => state.cart.items);

    this.store.select(CartState.getCartValue).subscribe(value =>
    {
      this.cartWorth = value;
    });

    this.store.select(ClientState.getLogin).subscribe(value =>
    {
      this.login = value;
    });
  }

  onSubmit(): void{

    if (!this.checkoutForm.valid) {
      return;
    }

    let list : CartItem[] = [];
    this.cartItems.subscribe(items =>
    {
      list = items;
    });

    let newOrderLines : OrderLine[] = [];
    for (var i = 0; i < list.length; i++) {
      let line = new OrderLine(
        list[i].name,
        list[i].quantity,
        list[i].price * list[i].quantity
      )
      newOrderLines.push(line);
    }

    let date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

    const newOrder : Order = new Order(
      null,
      this.cartWorth,
      date,
      this.login,
      newOrderLines
     )
    
     this.responseObs = this.checkoutService.buy(newOrder);

     this.subscription = this.responseObs.subscribe(response => {

      if (response.success) {
            this.store.dispatch(new EmptyCart());
            this.router.navigate(['/customer/infos']);
      }

      if (!response.success) {
        this.checkoutForm.setErrors({
          bug: true
        });
      }
    });
  }

  fillInputs(): void {
    this.checkoutForm.controls.numeroCarte.setValue('5132830969148725');
    this.checkoutForm.controls.validiteMois.setValue('09');
    this.checkoutForm.controls.validiteAnnee.setValue('23');
    this.checkoutForm.controls.cvc.setValue('810');
  }
}

export function numeroCarteValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const regex: RegExp = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
  return regex.test(control.value) ? null : { test: true };
}

export function validiteMoisValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const regex: RegExp = /^(?!00)[0-9]{2}$/;
  return regex.test(control.value) ? null : { test: true };
}

export function validiteAnneeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const regex: RegExp = /^(?!00)[0-9]{2}$/;
  return regex.test(control.value) ? null : { test: true };
}

export function cvcValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const regex: RegExp = /\d{3}/;
  return regex.test(control.value) ? null : { test: true };
}
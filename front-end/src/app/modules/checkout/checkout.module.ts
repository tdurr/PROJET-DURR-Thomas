import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutFormComponent } from './../checkout/checkout-form/checkout-form.component';
import { CheckoutService } from './../checkout/service/checkout.service';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiHttpInterceptor } from './api-http-interceptor';
import { CardNumberPipe } from './pipes/card-number.pipe';

@NgModule({
  declarations: [
    CheckoutFormComponent,
    CardNumberPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CheckoutRoutingModule,
  ],
  providers: [
    CheckoutService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true 
    }
  ]
})
export class CheckoutModule { }

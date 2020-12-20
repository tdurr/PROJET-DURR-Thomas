import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientRegisterFormComponent } from './client-register-form/client-register-form.component';
import { ClientInfosComponent } from './client-infos/client-infos.component';
import { ClientLoginFormComponent } from './client-login-form/client-login-form.component'
import { TelephonePipe } from './pipes/telephone.pipe';
import { PasswordMatchDirective } from './directives/password-match.directive';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerService } from './../customer/services/customer.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiHttpInterceptor } from './api-http-interceptor';
import { ClientOrdersComponent } from './../customer/client-orders/client-orders.component';

@NgModule({
  declarations: [
    ClientRegisterFormComponent,
    ClientInfosComponent,
    TelephonePipe,
    PasswordMatchDirective,
    ClientLoginFormComponent,
    ClientOrdersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    HttpClientModule
  ],
  providers: [
    CustomerService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true 
    }
  ]
})
export class CustomerModule { }

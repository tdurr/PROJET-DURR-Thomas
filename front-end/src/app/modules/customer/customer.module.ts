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
import { ClientHubComponent } from './client-hub/client-hub.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    ClientRegisterFormComponent,
    ClientInfosComponent,
    TelephonePipe,
    PasswordMatchDirective,
    ClientLoginFormComponent,
    ClientHubComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerService]
})
export class CustomerModule { }

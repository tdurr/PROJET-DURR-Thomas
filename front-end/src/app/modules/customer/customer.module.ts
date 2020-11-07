import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientRegisterFormComponent } from './client-register-form/client-register-form.component';
import { ClientInfosComponent } from './client-infos/client-infos.component';
import { TelephonePipe } from './pipes/telephone.pipe';
import { PasswordMatchDirective } from './directives/password-match.directive';
import { CustomerRoutingModule } from './customer-routing.module';


@NgModule({
  declarations: [
    ClientRegisterFormComponent,
    ClientInfosComponent,
    TelephonePipe,
    PasswordMatchDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }

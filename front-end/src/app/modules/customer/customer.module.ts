import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormClientAccountComponent } from './form-client-account/form-client-account.component';
import { SummaryClientAccountComponent } from './summary-client-account/summary-client-account.component';
import { TelephonePipe } from './pipes/telephone.pipe';
import { PasswordMatchDirective } from './directives/password-match.directive';
import { CustomerRoutingModule } from './customer-routing.module';


@NgModule({
  declarations: [
    FormClientAccountComponent,
    SummaryClientAccountComponent,
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

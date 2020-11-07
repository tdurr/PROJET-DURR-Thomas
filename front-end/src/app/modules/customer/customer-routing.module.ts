import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormClientAccountComponent } from './form-client-account/form-client-account.component';
import { SummaryClientAccountComponent } from './summary-client-account/summary-client-account.component';

const routes: Routes = [
  {
    path: 'new',
    component: FormClientAccountComponent
  },
  {
    path: 'infos',
    component: SummaryClientAccountComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerRoutingModule { }

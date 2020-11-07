import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientRegisterFormComponent } from './client-register-form/client-register-form.component';
import { ClientInfosComponent } from './client-infos/client-infos.component';

const routes: Routes = [
  {
    path: 'new',
    component: ClientRegisterFormComponent
  },
  {
    path: 'infos',
    component: ClientInfosComponent
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

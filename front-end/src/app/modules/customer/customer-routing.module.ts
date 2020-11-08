import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientRegisterFormComponent } from './client-register-form/client-register-form.component';
import { ClientInfosComponent } from './client-infos/client-infos.component';
import { ClientLoginFormComponent } from './client-login-form/client-login-form.component';
import { ClientHubComponent } from './client-hub/client-hub.component';

const routes: Routes = [
  {
    path: 'register',
    component: ClientRegisterFormComponent
  },
  {
    path: 'infos',
    component: ClientInfosComponent
  },
  {
    path: 'login',
    component: ClientLoginFormComponent
  },
  {
    path: 'hub',
    component: ClientHubComponent
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

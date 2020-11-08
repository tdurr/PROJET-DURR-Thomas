import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('./modules/product-catalog/product-catalog.module').then(
        m => m.ProductCatalogModule
      )
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./modules/customer/customer.module').then(
        m => m.CustomerModule
      )
  },
  {
    path: '', 
    redirectTo: 'product/list', 
    pathMatch: 'full'
  },
  /*{
    path: '**', 
    redirectTo: 'product/list', 
    pathMatch: 'full'
  }, */
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { DataService } from './../product-catalog/services/data.service';
import { ProductsByNamePipe } from './pipes/products-by-name.pipe';
import { ProductsByCategoryPipe } from './pipes/products-by-category.pipe';
import { ProductsByPricePipe } from './pipes/products-by-price.pipe';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFilterComponent,
    ProductDetailsComponent,
    ProductCartComponent,
    ProductsByNamePipe,
    ProductsByCategoryPipe,
    ProductsByPricePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductRoutingModule
  ],
  providers: [DataService]
})
export class ProductCatalogModule { }

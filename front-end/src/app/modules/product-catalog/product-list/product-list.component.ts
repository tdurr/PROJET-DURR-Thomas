import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../models/product';
import { DataService } from './../services/data.service';
import { Store } from '@ngxs/store';
import { AddToCart } from '../../../store/actions/cart-action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  public products : Observable<Product[]>
  public nameFilter : string = '';
  public categoryFilter : string = '';
  public priceFilter : number = 0;

  constructor(private dataService : DataService, private store: Store) { }

  ngOnInit(): void {
    this.products = this.dataService.getProducts();
  }

  public onFilterEvent(filters: Observable<any>): void {
    filters.subscribe(f => {
      this.nameFilter = f.nameFilter;
      this.categoryFilter = f.categoryFilter;
      this.priceFilter = f.priceFilter;
    })
  }

  public AddToCart(product: Product): void {
    this.store.dispatch(new AddToCart(product));
    
    // snackbar
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
}

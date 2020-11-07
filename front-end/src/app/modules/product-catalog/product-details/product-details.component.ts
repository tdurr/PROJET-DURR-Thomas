import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from './../modeles/product';
import { DataService } from './../services/data.service';
import { Store } from '@ngxs/store';
import { AddToCart } from './../actions/cart-action';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public productObs : Observable<Product>;

  constructor(private route: ActivatedRoute, private dataService : DataService, private store : Store) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      let idFromUrl : string = params.get('id');
      this.productObs = this.dataService.getDataById(idFromUrl);
    });
  }

  public AddToCart(product : Product) : void {
    this.store.dispatch( new AddToCart(product));
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
}

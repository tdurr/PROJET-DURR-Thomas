import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { CartState } from './../modules/product-catalog/states/cart-state';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public sizeOfCart : Observable<number>;

  constructor(private store : Store) { }

  ngOnInit(): void {
    this.sizeOfCart = this.store.select(CartState.getNbOfItems);
  }

}

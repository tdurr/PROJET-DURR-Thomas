import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { CartState } from '../store/states/cart-state';
import { ClientState } from '../store/states/client-state';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public sizeOfCart : Observable<number>;
  public login: Observable<string>;

  constructor(private store : Store) { }

  ngOnInit(): void {
    this.sizeOfCart = this.store.select(CartState.getNbOfItems);
    this.login = this.store.select(ClientState.getLogin);
  }

}

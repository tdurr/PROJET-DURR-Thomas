import { Component, OnInit } from '@angular/core';
import { Order } from '../../../models/Order';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { CustomerService } from './../services/customer.service';
import { ClientState } from './../../../store/states/client-state';

@Component({
  selector: 'app-client-orders',
  templateUrl: './client-orders.component.html',
  styleUrls: ['./client-orders.component.css']
})
export class ClientOrdersComponent implements OnInit {

  public orderObs : Observable<Order[]>;
  
  constructor(private customerService: CustomerService, private store: Store) { }

  ngOnInit(): void {

    this.orderObs = this.store.select(ClientState.getLogin)
      .pipe(
        mergeMap(
          (login: string): Observable<Order[]> => {
            if (login !== '') {
              return this.customerService.getOrders(login);
            }
            else {
              return of(null);
            }
          }
        )
      );
  }
}

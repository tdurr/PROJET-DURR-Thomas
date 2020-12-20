import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../../../models/Order';
import { environment } from './../../../../environments/environment';


@Injectable()
export class CheckoutService {

  constructor(private http : HttpClient) { }

  buy(order: Order): Observable<{success: boolean}> {
    let body = new URLSearchParams();
    body.set('order', JSON.stringify(order));

    return this.http.post<{success: boolean}>(
      environment.apiUrl + 'order/buy',
      body.toString(),
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      }
    );
  }
}

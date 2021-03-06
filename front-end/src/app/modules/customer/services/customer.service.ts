import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../../../models/Client';
import { Order } from '../../../models/Order';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getClient(login: string): Observable<Client> {
    return this.http.get<Client>(environment.apiUrl + 'user/' + login);
  }

  login(login: string, password: string): Promise<any> {
    let body = new URLSearchParams();
    body.set('login', login);
    body.set('password', password);

    return this.http.post<any>(
      environment.apiUrl + 'user/login',
      body.toString(),
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        observe: 'response'
      }
    ).toPromise();
  }

  register(client: Client): Observable<{success: boolean, login: string}> {
    let body = new URLSearchParams();
    body.set('client', JSON.stringify(client));

    return this.http.post<{success: boolean, login: string}>(
      environment.apiUrl + 'user/register',
      body.toString(),
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      }
    );
  }

  getOrders(login: string) : Observable<Order[]> {
    return this.http.get<Order[]>(environment.apiUrl + 'order/' + login);
  }
}

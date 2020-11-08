import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from './../../customer/modeles/Client';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

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

  register(account: Account): Promise<Account> {
    let body = new URLSearchParams();
    body.set('account', JSON.stringify(account));

    return this.http.post<any>(
      environment.apiUrl + 'users/register',
      body.toString(),
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      }
    )
    .toPromise()
    .then<Account>(val => JSON.parse(val.account));
  }
}

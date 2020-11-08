import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Client } from '../../../models/Client';

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

  async register(client: Client): Promise<Client> {
    let body = new URLSearchParams();
    body.set('client', JSON.stringify(client));

    const val = await this.http.post<any>(
      environment.apiUrl + 'user/register',
      body.toString(),
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      }
    )
      .toPromise();
    const result: Client = JSON.parse(val.client);
    return result;
  }
}

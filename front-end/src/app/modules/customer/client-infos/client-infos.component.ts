import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/Client';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ClientState } from './../../../store/states/client-state';
import { CustomerService } from './../services/customer.service';

@Component({
  selector: 'app-client-infos',
  templateUrl: './client-infos.component.html',
  styleUrls: ['./client-infos.component.css']
})
export class ClientInfosComponent implements OnInit {

  public clientObs : Observable<Client>;
  private loginObs : Observable<string>;
  
  constructor(private customerService: CustomerService, private store: Store) { }

  ngOnInit(): void {
    this.loginObs = this.store.select(ClientState.getLogin);
    
    this.loginObs.pipe(
      mergeMap((login : string): Observable<Client> => {
        if ( login !== '') {
          return this.customerService.getClient(login);
        }
        else {
          return of(null);
        }
      }
      )
    )
  }
}

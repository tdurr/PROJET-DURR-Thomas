import { Component, OnInit } from '@angular/core';
import { Client } from '../modeles/Client';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ClientState } from './../states/client-state';

@Component({
  selector: 'app-client-infos',
  templateUrl: './client-infos.component.html',
  styleUrls: ['./client-infos.component.css']
})
export class ClientInfosComponent implements OnInit {

  public clientObs : Observable<Client>;
  
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.clientObs = this.store.select(ClientState.getClient);
  }
}

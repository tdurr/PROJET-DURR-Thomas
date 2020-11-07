import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../modeles/Client';

@Component({
  selector: 'app-client-infos',
  templateUrl: './client-infos.component.html',
  styleUrls: ['./client-infos.component.css']
})
export class ClientInfosComponent implements OnInit {

  //@Input() client: Client;
  //@Output() deleteCustomerEvent: EventEmitter<Client> = new EventEmitter<Client>();

  public client : Client;
  
  constructor() { }

  ngOnInit(): void {
    this.client = history.state.clientData;
  }

  /*public onDelete($event: Client): void {
    this.deleteCustomerEvent.emit(this.client);
  } */
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Product } from '../../../models/product';
import { environment } from './../../../../environments/environment';


@Injectable()
export class DataService {

  constructor(private http : HttpClient) { }

  /*getData() : Observable<Product[]> { 
    return this.http.get("http://localhost:4200/assets/product-set.json")
    .subscribe(data => console.log(data));
  } */

  public getData() : Observable<Product[]> {
    return this.http.get<Product[]>(environment.url)
  }

  public getDataById(id : string) : Observable<Product> {
    return this.getData().pipe(map( items => {
      return items.find( i => i.id.toString() == id );
    }));
  }
}

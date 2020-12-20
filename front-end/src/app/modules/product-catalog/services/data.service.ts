import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Product } from '../../../models/product';
import { environment } from './../../../../environments/environment';


@Injectable()
export class DataService {

  constructor(private http : HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiUrl + 'product/all');
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(environment.apiUrl + 'product/' + id);
  }
}

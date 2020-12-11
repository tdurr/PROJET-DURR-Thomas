import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { ClientState } from 'src/app/store/states/client-state';

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

  jwtToken : string;

  constructor(private store: Store) { 
    this.store.select(ClientState.getTokenJwt).subscribe(jwt =>
      {
        this.jwtToken = jwt;
      });
  }
   
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Authorization': this.jwtToken,
      },
    });

    return next.handle(request);
  }
}
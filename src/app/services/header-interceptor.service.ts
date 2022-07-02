import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor {

  constructor( private userService: UserService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.userService.token;

    if ( token ) {
      req = req.clone({
        setHeaders: {Authorization: `Bearer ${token}`}
      })
    }

    return next.handle(req);
    //throw new Error('Method not implemented.');
  }
}

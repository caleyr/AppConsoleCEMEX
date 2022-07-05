import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( 
    private userService: UserService,
    private router: Router ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ) {
    
    if ( !this.userService.isLogged() ) {
      this.router.navigateByUrl('/login');
      return false;
    }else{
      const url = state.url; 
      if(url.includes('/dashboard/usuarios/detalles')){
        this.router.navigateByUrl('/dashboard/usuarios');
        return false;
      }
      return true; 
    }

    

    //return true;
    /*return this.userService.validateToken() 
      .pipe(
        tap( isAuth => {
          if( !isAuth ) this.router.navigateByUrl('/login');
        })
    );*/
  }  
}

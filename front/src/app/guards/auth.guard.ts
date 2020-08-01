import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

//Proteje las rutas desde el front
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){
  }

  canActivate(){
    if(this.authService.loggedIn()) {
      return true;
    }
    this.router.navigate(['/signin']);
    return false;
  }

}

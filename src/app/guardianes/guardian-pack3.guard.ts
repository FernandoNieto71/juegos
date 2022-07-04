import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SuscripcionService } from '../servicio/suscripcion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardianPack3Guard implements CanActivate {
  constructor(private servicio:SuscripcionService, private miRouter:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.servicio.accesoP3){
        return true;
      } else {
        this.miRouter.navigate(["errorsuscripcion"]);
        return false;
        
      }
  }
  
}

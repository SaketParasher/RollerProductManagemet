
import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';


@Injectable()
export class ProductGuardService implements CanActivate{

    constructor(private _router:Router){
        console.log('Inside constructor');
    }

    // ActivatedRouteSnapshot contains the info about a route at any point of time and is available as args in canActivate() method. 
    canActivate(_route:ActivatedRouteSnapshot):boolean{
        let id = +_route.url[1].path;
        console.log('id : '+id);
        if(isNaN(id) || id<1 ){
            alert('Invalid product ID');
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    }

}
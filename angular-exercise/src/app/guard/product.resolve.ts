import { Product } from '../entities/product';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ProductResolve implements Resolve<Product> {

    constructor(private router: Router) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {

        let productId: number = route.params['id'];

        if(productId == 1) {
            return new Product(1, 'iPhone7');
        } else {
            this.router.navigate(['/home']);
        }
    }
}
    

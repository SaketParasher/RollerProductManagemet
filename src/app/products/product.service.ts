
import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Http,Response } from '@angular/http';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import { Observable,interval } from 'rxjs';

@Injectable()
export class ProductService{
    
    private _productUrl = '../../api/products/products.json';

    constructor(private _http:HttpClient){
    };

    
    getProducts():Observable<IProduct[]>{
        
        return this._http.get(this._productUrl).pipe(
                map((response:HttpResponse<any>) => <any>response)
        ).pipe(catchError(this.handleError))
    }

    private handleError(error:Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}
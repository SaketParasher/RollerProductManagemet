
import { Component,OnInit } from '@angular/core';
import { IProduct } from './product';

// ActivatedRoute to get the param value and Router service to navigate from code.
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
    selector:'pdt-details',
    templateUrl:'./product-details.component.html'
})
export class ProductDetailsComponent implements OnInit{
    pageTitle:string = 'Product Details Page'; 
    product:IProduct;
    productDetails:IProduct[];
    productName:string = '';
    imgUrl:string = '';

    constructor( private _route:ActivatedRoute, private _router:Router,private pdtService:ProductService){

    }

    ngOnInit():void{
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += ` : ${id}`;
        this.pdtService.getProducts().subscribe((data) => {
            console.log(data);
            var that =this;
            data.forEach(function(obj){
                if(obj.productId == id){
                  that.productName = obj.productName;
                  that.imgUrl = obj.imageUrl;  
                }
            },that);
        });
        //console.log(this.productDetails);
    }

    onBack():void{
        // to navigate from code
        this._router.navigate(['/products']);
    }

}
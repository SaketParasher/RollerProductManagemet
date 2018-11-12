
import { Component,OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
    //moduleId:module.id,
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{ 
    pageTitle:string = 'Roller Product Management';
    imageWidth:number = 50;
    imageMargin:number = 2;
    showImage:boolean = false;
    filterText:string = '';
    errMsg = '';
    products:IProduct[];
    
    constructor(private _productService:ProductService){
        //this.products = _productService.getProducts();
    }
    toggleImage():void{
        this.showImage = !this.showImage;
    };

    // as our component implements OnInit it must have ngOnInit() method implemented.
    ngOnInit():void{
        console.log('Application Started');
        //ngOnInit contains all initialization logic
        this._productService.getProducts().subscribe((data) => this.products= data,err => this.errMsg = <any>err);   
        //this._productService.getProducts().then((data) => this.products=data);
        };
    
    onOutputEvent(event:string):void{
        console.log('Event received by outer Component');
        console.log(event);
    }
}
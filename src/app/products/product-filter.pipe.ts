
// Product filter custom pipe 

// importing dependencies
import { Pipe,PipeTransform } from '@angular/core'
import { IProduct } from './product';

// @Pipe decorator
@Pipe({
    name:'ProductFilterPipe'
})
export class ProductFilterPipe implements PipeTransform{

    // implementing transform method. The first argument will be implicit ie. the item on which this pipe is being applied.
    // 2nd argument will be passed explicitly after : from template
    transform(value:IProduct[],filterBy:string):IProduct[]{
        filterBy = filterBy?filterBy.toLocaleLowerCase():null;
        return filterBy ? value.filter((product:IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) != -1):value;
    }
}
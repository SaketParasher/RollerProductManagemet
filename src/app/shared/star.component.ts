
// We will use this component as nested component to display the star ratings

import { Component,OnChanges } from '@angular/core';

@Component({
    selector:'ai-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
    rating:number = 4;
    starWidth:number;

    ngOnChanges():void{
        this.starWidth = this.rating* 75/5;
    }

}
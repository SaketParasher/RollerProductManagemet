
// We will use this component as nested component to display the star ratings

import { Component,OnChanges,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector:'ai-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
   // rating here is property with Input decorator so it must be used as property binding at place where this component's selector is used.
    @Input() rating:number;
    starWidth:number;

    // output property of type EventEmitter of string type. this will be evnt binded in template
    @Output() starClicked:EventEmitter<string> = new EventEmitter<string>();

    onStarClick():void{
        console.log("CLicked on stars");
        // @output propety is emitted and starCLicked event will be fired in Container component.
        this.starClicked.emit(`Start of Rating ${this.rating} was Clicked!!!`);
    }

    // ngOnChanges only watches for changes to inpu properties
    ngOnChanges():void{
        this.starWidth = this.rating* 75/5;
    }
}
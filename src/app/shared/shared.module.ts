
/*
  Shared Module contains all the Modules and Components which may be used by Two or more than 2 Modules. We add all these 
  Modules and components in the Exports Array. So that the Module which imports this Module can use those Modules 
  and components.We will use this SharedModule into ProductModule.
*/

import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        StarComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        CommonModule,
        FormsModule,
        StarComponent
    ]
})
export class SharedModule{

}
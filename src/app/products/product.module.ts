/*
    This is a Feature Module which will be Imported to the App Module. This is Product Module so all the logics and Implementations
    Related to Product Data and Product Page Navigation is Implemented in this module.  
*/

import { NgModule } from "@angular/core";

//import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// SharedModule COntains CommonModule,FormsModule and StarComponent.After Importing SharedModule now our FeaturedModule 
// ie. ProductModule now contains only component and pipes and modules which are required for the Products manipulation
import { SharedModule } from '../shared/shared.module';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
//import { StarComponent } from '../shared/star.component';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
@NgModule({
    declarations:[
        ProductListComponent,
        ProductDetailsComponent,
        ProductFilterPipe,
        //StarComponent
    ],
    imports:[
        //CommonModule,
        //FormsModule,
        SharedModule,
        // as this module will be Imported into App Module we will use forChild for Routing product Paths
        RouterModule.forChild([
            {path:'products',component:ProductListComponent},
            {path:'product/:id',canActivate:[ProductGuardService], component:ProductDetailsComponent},
        ]),
    ],
    providers:[
        ProductGuardService,
        ProductService
    ]
})
export class ProductModule{
    
}
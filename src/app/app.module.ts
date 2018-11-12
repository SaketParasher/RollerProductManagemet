

/**
 * BrowserModule is imported in this module which contains Most important Modules and dependencies for App to Run in Browser.
 * BrowserModule also Contains CommonModule which contains *ngIf and *ngFor directives.
 * 
 * RouterModule in this Module contains only those routeConfigurations which are not Related to Products page Routing.
 * ProductsListingPage and ProductDetailsPage Routing is done in ProductModule.
 * 
 * These Dependencies were Imported directly but Now they have been imported into their respective Modules and that Module is 
 * Being Imported into AppModule. ProductModule is the Module which contains All the components, Directives and Pipes and 
 * ROuteGuards such as ProductFIlterPipe and ProductGuardService.
 */
//import { FormsModule } from '@angular/forms'
//import { ProductListComponent } from './products/product-list.component';
//import { ProductFilterPipe } from './products/product-filter.pipe';
//import { StarComponent } from './shared/star.component';
//import { ProductDetailsComponent } from './products/product-details.component';
//import { ProductGuardService } from './products/product-guard.service';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { AppComponent } from './app.component';

// Product Module which contains all the implementations regarding Product Data and Navigation ie ProductListComponent and 
// ProductDetailsComponent
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    //ProductListComponent,
    // ProductFilterPipe,
    //StarComponent,
    //ProductDetailsComponent,
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    //FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ProductModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  //providers:[ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './home/home.component';


import { SharedModule } from '../shared/shared.module';
import { DragComponent } from './drag/drag.component';
@NgModule({
  declarations: [
    HomeComponent,
    DragComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    
    SharedModule
    

  ]
})
export class CustomerModule { }

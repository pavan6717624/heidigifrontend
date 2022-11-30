import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { HomeComponent } from './home/home.component';

import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    SharedModule
  ]
})
export class NewModule { }
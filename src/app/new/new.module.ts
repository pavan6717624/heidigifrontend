import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { HomeComponent } from './home/home.component';

import { SharedModule } from '../shared/shared.module';
import { MenubarComponent } from './menubar/menubar.component';
import { StartpageComponent } from './startpage/startpage.component';
import { LoginComponent } from './login/login.component';
import { DisplaypageComponent } from './displaypage/displaypage.component';
@NgModule({
  declarations: [
    HomeComponent,
    MenubarComponent,
    StartpageComponent,
    LoginComponent,
    DisplaypageComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    SharedModule
  ]
})
export class NewModule { }

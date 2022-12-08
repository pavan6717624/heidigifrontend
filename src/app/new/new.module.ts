import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { HomeComponent } from './home/home.component';

import { SharedModule } from '../shared/shared.module';
import { MenubarComponent } from './menubar/menubar.component';
import { StartpageComponent } from './startpage/startpage.component';
import { LoginComponent } from './login/login.component';
import { DisplaypageComponent } from './displaypage/displaypage.component';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { NgOtpInputModule } from 'ng-otp-input';

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
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgOtpInputModule
  ]
})
export class NewModule { }

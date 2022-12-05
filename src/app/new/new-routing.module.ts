import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaypageComponent } from './displaypage/displaypage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 
  {path: '', component: HomeComponent},

  {path: 'display', component: DisplaypageComponent}

];

@NgModule({     
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRoutingModule { }

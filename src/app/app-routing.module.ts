import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermekekComponent } from './part/termekek/termekek.component';
import { RendelesComponent } from './part/rendeles/rendeles.component';
import { RolunkComponent } from './part/rolunk/rolunk.component';
import { SigninComponent } from './part/signin/signin.component';

const routes: Routes = [
  {path:"termekek", component:TermekekComponent},
  {path:"rendeles", component:RendelesComponent},
  {path:"signin", component:SigninComponent},
  

  {path:"", component:RolunkComponent},
  {path:"**", component:RolunkComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

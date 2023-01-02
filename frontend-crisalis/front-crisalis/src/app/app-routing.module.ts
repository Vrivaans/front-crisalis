import { MainComponent } from './main/main/main.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { MainComponent } from './main/main/main.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ClienteComponent } from './pages/cliente/cliente.component'

const routes: Routes = [
  {path: '', component:MainComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'clientes', component:ClienteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

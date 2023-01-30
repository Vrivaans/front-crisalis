import { PedidoComponent } from './pages/pedido/pedido.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { MainComponent } from './main/main/main.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ClienteComponent } from './pages/cliente/cliente.component'
import { ProductoComponent } from './pages/producto/producto.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { NewPedidoComponent } from './pages/pedido/new-pedido/new-pedido.component';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'clientes', component:ClienteComponent},
  {path: 'productos', component:ProductoComponent},
  {path: 'servicios', component:ServicioComponent},
  {path: 'empresas', component:EmpresaComponent},
  {path: 'pedidos', component:PedidoComponent},
  {path: 'nuevo-pedido', component:NewPedidoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

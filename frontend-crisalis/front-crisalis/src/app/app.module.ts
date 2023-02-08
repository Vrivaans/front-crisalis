import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { interceptorProvider } from './services/interceptor-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main/main.component';
import { NavbarComponent } from './sharepages/navbar/navbar/navbar.component';
import { FooterComponent } from './sharepages/footer/footer/footer.component';
import { LoginComponent } from './pages/login/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { NewClienteComponent } from './pages/cliente/new-cliente/new-cliente.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { NewProductoComponent } from './pages/producto/new-producto/new-producto.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { NewServicioComponent } from './pages/servicio/new-servicio/new-servicio.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { NewEmpresaComponent } from './pages/empresa/new-empresa/new-empresa.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { NewPedidoComponent } from './pages/pedido/new-pedido/new-pedido.component';
import { EditClienteComponent } from './pages/cliente/edit-cliente/edit-cliente.component';
import { EditEmpresaComponent } from './pages/empresa/edit-empresa/edit-empresa.component';
import { EditProductoComponent } from './pages/producto/edit-producto/edit-producto.component';
import { EditServicioComponent } from './pages/servicio/edit-servicio/edit-servicio.component';


//import { interceptorProvider } from './services/interceptor-service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    DashboardComponent,
    ClienteComponent,
    NewClienteComponent,
    ProductoComponent,
    NewProductoComponent,
    ServicioComponent,
    NewServicioComponent,
    EmpresaComponent,
    NewEmpresaComponent,
    PedidoComponent,
    NewPedidoComponent,
    EditClienteComponent,
    EditEmpresaComponent,
    EditProductoComponent,
    EditServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

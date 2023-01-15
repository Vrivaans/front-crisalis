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
    NewClienteComponent
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

import { TokenService } from 'src/app/services/token.service';
import { ClienteServicesService } from './../../services/cliente-services.service';
import { Component } from '@angular/core';
import { Cliente } from 'src/app/Models/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {
cliente: Cliente[] = [];

constructor(private clienteServices: ClienteServicesService, private tokenService: TokenService){}

esta_logeado = false;

ngOnInit(): void {
  this.cargarClientes();
  if (this.tokenService.getToken()) {
    this.esta_logeado = true;
  } else{
    this.esta_logeado = false;
  }

}

cargarClientes():void{
  this.clienteServices.listaClientes().subscribe(data => {this.cliente = data;})
}

}

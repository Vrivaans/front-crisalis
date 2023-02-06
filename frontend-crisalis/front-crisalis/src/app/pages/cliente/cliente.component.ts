import { ServiciosContratados } from './../../Models/serviciosContratados';
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
serviciosCliente: ServiciosContratados[] = [];

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

delete(id?:number){
  if(id != null){
    this.clienteServices.delete(id).subscribe(
      data => {
        this.cargarClientes();
      }, err => {
        //alert("Hubo un error al borrar el cliente")
        window.location.reload();
      }
    )
  }
}

mostrarServiciosContratados(id?: number){
  let idN = id as number
  this.clienteServices.serviciosCliente(idN).subscribe(data => {this.serviciosCliente = data;})
}

}

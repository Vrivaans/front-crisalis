import { PedidosServicesService } from './../../services/pedidos-services.service';
import { OrderE } from './../../Models/ordere';
import { ServiciosContratados } from './../../Models/serviciosContratados';
import { EmpresaServicesService } from './../../services/empresa-services.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Empresa } from 'src/app/Models/empresa';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent {
  empresa: Empresa[] = []
  serviciosEmpresa: ServiciosContratados[] = []
  pedidosEmpresa: OrderE [] = []
  esta_logeado = false;

  constructor(private router: Router, private tokenService: TokenService, private empresaServices: EmpresaServicesService, private orderServices: PedidosServicesService){}

  ngOnInit(): void {
    this.cargarEmpresas();
    if (this.tokenService.getToken()) {
      this.esta_logeado = true;
    } else{
      this.esta_logeado = false;
    }
    }

cargarEmpresas():void{
  this.empresaServices.lista().subscribe(data => {this.empresa = data;})
}

mostrarServiciosContratados(id?: number){
let idN: number = id as number
this.empresaServices.serviciosEmpresa(idN).subscribe(data => {this.serviciosEmpresa = data;})

}
mostrarPedidos(id?: number){
  let idN: number = id as number
  this.empresaServices.pedidosEmpresa(idN).subscribe(data => {this.pedidosEmpresa = data;})

}
estadoServicio(id?: number){
  let idN = id as number
  this.empresaServices.cambiarEstadoServicio(idN).subscribe(data => {idN = data;})
}

estadoPedido(id?: number){
  let idN = id as number
  this.orderServices.cambiarEstado(idN).subscribe(data => {idN = data;})
}

delete(id?:number){
  if(id != null){
    this.empresaServices.delete(id).subscribe(
      data => {
        this.cargarEmpresas();
      }, err => {
        //alert("Hubo un error al borrar el cliente")
        window.location.reload();
      }
    )
  }
}

}

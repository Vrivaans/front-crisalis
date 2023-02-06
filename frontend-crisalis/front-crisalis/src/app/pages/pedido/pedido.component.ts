import { PedidosServicesService } from './../../services/pedidos-services.service';
import { Router } from '@angular/router';
import { OrderE } from './../../Models/ordere';
import { Empresa } from './../../Models/empresa';
import { Cliente } from './../../Models/cliente';
import { Component, TemplateRef } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent {
  order: OrderE[] = []
  esta_logeado = false;

  constructor(private tokenService: TokenService, private router: Router, private orderServices: PedidosServicesService){}

  ngOnInit(): void {
    this.cargarPedidos()
    if (this.tokenService.getToken()) {
      this.esta_logeado = true;
    } else{
      this.esta_logeado = false;
    }
    }

    cargarPedidos():void{
      this.orderServices.lista().subscribe(data => {this.order = data;})
    }


    estadoPedido(id?: number){
      console.log("click")
      let idNumber = id as number
         this.orderServices.cambiarEstado(idNumber).subscribe(data => {idNumber = data;})
         window.location.reload()
    }


    // delete(id?:number){
    //   if(id != null){
    //     this.orderServices.delete(id).subscribe(
    //       data => {
    //         this.cargarPedidos();
    //       }, err => {
    //         //alert("Hubo un error al borrar el cliente")
    //         window.location.reload();
    //       }
    //     )
    //   }
    // }

}

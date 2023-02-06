import { OrderDetail } from './../../Models/orderDetail';
import { PedidosServicesService } from './../../services/pedidos-services.service';
import { Router } from '@angular/router';
import { OrderE } from './../../Models/ordere';
import { Empresa } from './../../Models/empresa';
import { Cliente } from './../../Models/cliente';
import { Component, TemplateRef } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { NgIfContext } from '@angular/common';
import { DtoOrderDetails } from 'src/app/Models/dtoOrderDetails';
import { __values } from 'tslib';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent {
  order: OrderE[] = []
  esta_logeado = false;
  listaDetallesDto: DtoOrderDetails[] = []
  // listaDetalles!: OrderDetail[];

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
    // getDetalles():void{
    //   this.orderServices.traerDetalles().subscribe(data => {this.listaDetallesDto = data})
    // }


    estadoPedido(id?: number){

      let idNumber = id as number
         this.orderServices.cambiarEstado(idNumber).subscribe(data => {idNumber = data;})
         window.location.reload()
    }

    listaDetalles!: OrderDetail[];
    itemPedido!: OrderDetail
    listaDtoDetalles!: DtoOrderDetails[];
    itemPedidoDto!: DtoOrderDetails

    mostrarListaDetalles(id?: number) {
      let idN: number = id as number
      this.orderServices.traerDetalles(idN).subscribe(data => {this.listaDetallesDto = data})

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

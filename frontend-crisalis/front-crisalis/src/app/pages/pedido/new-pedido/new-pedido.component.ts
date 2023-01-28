import { Empresa } from './../../../Models/empresa';
import { PedidosServicesService } from './../../../services/pedidos-services.service';
import { OrderE } from './../../../Models/ordere';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Models/cliente';
import { OrderDetail } from 'src/app/Models/orderDetail';

@Component({
  selector: 'app-new-pedido',
  templateUrl: './new-pedido.component.html',
  styleUrls: ['./new-pedido.component.scss']
})
export class NewPedidoComponent {

  clienteAux: Cliente = new Cliente("", "", "");
  empresaAux: Empresa = new Empresa("","","","","","")

  fechaPedido: string = ""
  totalPedido: number = 0
  activo: boolean = false
  cliente: Cliente =  this.clienteAux
  empresa: Empresa = this.empresaAux;
  orderDetails: OrderDetail[] = []
  constructor(private router: Router, private pedidoServices: PedidosServicesService){

  }



  onCreate(){
    const order = new OrderE(this.fechaPedido, this.totalPedido, this.activo, this.cliente, this.empresa, this.orderDetails)
    this.pedidoServices.save(order).subscribe(
      data =>{

        //this.router.navigate([''])
        window.location.reload();

      }, err => {
        //alert("Hubo un error al cargar")
        window.location.reload();
      }
      )
  }
}

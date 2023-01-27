import { OrderDetail } from './orderDetail';
import { Empresa } from './empresa';
import { Cliente } from './cliente';
export class OrderE{
  id?: number;
  fechaPedido!: string
  totalPedido!: number
  activo!: boolean
  cliente!: Cliente
  empresa!: Empresa
  OrderDetails!: OrderDetail[]

constructor(fechaPedido: string, totalPedido: number, activo: boolean, cliente: Cliente, empresa: Empresa, orderDetails: OrderDetail[]){
  this.fechaPedido = fechaPedido
  this.totalPedido = totalPedido
  this.activo = activo
  this.cliente = cliente
  this.empresa = empresa
  this.OrderDetails = orderDetails
}

}

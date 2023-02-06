import { DtoOrderDetails } from './dtoOrderDetails';
export class DtoOrder{

  id?: number
  fechaPedido!: string
  totalPedido!: number
  activo!: boolean
  dniCliente!: string
  cuit!: string
  orderDetails!: DtoOrderDetails[]

  constructor(fechaPedido: string, totalPedido: number, activo: boolean, dniCliente: string, cuit: string, orderDetails: DtoOrderDetails[]){
    this.fechaPedido = fechaPedido
    this.totalPedido = totalPedido
    this.activo = activo
    this.dniCliente = dniCliente
    this.cuit = cuit
    this.orderDetails = orderDetails
  }

}

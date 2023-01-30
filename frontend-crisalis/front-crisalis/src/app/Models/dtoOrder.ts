import { DtoOrderDetails } from './dtoOrderDetails';
export class DtoOrder{
  fechaPedido!: string
  totalPedido!: number
  activo!: boolean
  dniCliente!: string
  cuit!: string
  dtoOrderDetails!: DtoOrderDetails[]
}

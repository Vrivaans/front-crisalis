import { Servicio } from './servicio';
import { Producto } from './producto';
export class OrderDetail{
  id?: number
  precioVenta!: number
  cantidad!: number
  soportePrecio!: number
  garantia!: number
  producto!: Producto
  servicio!: Servicio

  constructor(precioVenta: number, cantidad: number, soportePrecio: number, garantia: number, producto: Producto, servicio: Servicio){
    this.precioVenta = precioVenta
    this.cantidad = cantidad
    this.soportePrecio = soportePrecio
    this.garantia = garantia
    this. producto = producto
    this.servicio = servicio
  }
}

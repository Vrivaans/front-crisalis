export class DtoOrderDetails{
  nombre!: string
  garantia!: number
  cantidad!: number
  precioVenta!: number
  esServicio!: boolean
  precioSoporte!: number

  constructor(nombre: string, garantia: number, cantidad: number,
     precioVenta: number, esServicio: boolean, precioSoporte: number){
      this.nombre = nombre
      this.garantia = garantia
      this.cantidad = cantidad
      this.precioVenta = precioVenta
      this.esServicio = esServicio
      this.precioSoporte = precioSoporte
  }

}

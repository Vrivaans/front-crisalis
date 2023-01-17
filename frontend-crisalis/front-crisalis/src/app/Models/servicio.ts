export class Servicio{
  id?: number
  precioBase!: number
  nombre!: string
  soportePrecio!: number
  esEspecial!: boolean

  constructor(precioBase: number, nombre: string, soportePrecio: number, esEspecial: boolean){
    this.precioBase = precioBase
    this.nombre = nombre
    this.soportePrecio = soportePrecio
    this.esEspecial = esEspecial
  }
}

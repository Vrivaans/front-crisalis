export class Servicio{
  id?: number
  precioBase!: number
  nombre!: string
  soportePrecio!: number
  esEspecial!: boolean
  aplicaIva!: boolean
  aplicaIBrutos!: boolean;
  aplicaGanancias!: boolean


  constructor(precioBase: number, nombre: string, soportePrecio: number, esEspecial: boolean, aplicaIva: boolean, aplicaIBrutos: boolean, aplicaGanancias: boolean){
    this.precioBase = precioBase
    this.nombre = nombre
    this.soportePrecio = soportePrecio
    this.esEspecial = esEspecial
    this.aplicaIva = aplicaIva;
    this.aplicaIBrutos = aplicaIBrutos
    this.aplicaGanancias = aplicaGanancias
  }
}

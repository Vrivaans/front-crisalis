export class Producto{
  id?:number;
  precioBase!: number;
  nombre!: string;
  aplicaIva!: boolean
  aplicaIBrutos!: boolean;
  aplicaGanancias!: boolean


  constructor(precioBase: number, nombre: string, aplicaIva: boolean, aplicaIBrutos: boolean, aplicaGanancias: boolean){
    this.precioBase = precioBase
    this.nombre = nombre
    this.aplicaIva = aplicaIva
    this.aplicaIBrutos = aplicaIBrutos;
    this.aplicaGanancias = aplicaGanancias

  }
}

export class Producto{
  id?:number;
  precioBase!: number;
  nombre!: string;
  garantia!: number

  constructor(precioBase: number, nombre: string, garantia: number){
    this.precioBase = precioBase
    this.nombre = nombre
    this.garantia = garantia
  }
}

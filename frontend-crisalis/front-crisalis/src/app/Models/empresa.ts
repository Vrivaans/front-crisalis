export class Empresa{
  id?:number
  cuit!: string;
  razonSocial!: string;
  fechaInicioActividades!: string;

constructor(cuit: string, razonSocial: string, fechaInicioActividades: string){
  this.cuit = cuit
  this.razonSocial = razonSocial
  this.fechaInicioActividades = fechaInicioActividades
}
}

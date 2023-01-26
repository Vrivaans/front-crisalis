
export class Empresa {

  id?: number;
  dniCliente!: string;
  nombre!: string;
  apellido!: string
  cuit!: string;
  razonSocial!: string;
  fechaInicioActividades!: string;

constructor(dniCliente: string, nombre: string, apellido: string,  cuit: string, razonSocial: string, fechaInicioActividades: string){
  this.dniCliente = dniCliente;
  this.nombre = nombre;
  this.apellido = apellido;
  this.cuit = cuit
  this.razonSocial = razonSocial
  this.fechaInicioActividades = fechaInicioActividades
}

}

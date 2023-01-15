import { Empresa } from './empresa';
  export class Cliente{
    id?: number;
    dniCliente!: number;
    nombre!: string;
    apellido!: string
    cuit!: string;
    empresa!: Empresa;

    constructor(dniCliente: number, nombre: string, apellido: string, cuit: string){
      this.dniCliente = dniCliente;
      this.nombre = nombre;
      this.apellido = apellido;
      this.cuit = cuit;
    }
  }

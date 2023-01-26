

  export class Cliente  {

    id?: number;
    dniCliente!: string;
    nombre!: string;
    apellido!: string


    constructor(dniCliente: string, nombre: string, apellido: string){
      this.dniCliente = dniCliente;
      this.nombre = nombre;
      this.apellido = apellido;
    }


  }

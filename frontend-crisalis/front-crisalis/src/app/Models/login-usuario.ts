export class LoginUsuario {
    nombreUsuario;
    password: string;

    constructor(nombreUsuario: string, password: string){
      this.nombreUsuario = nombreUsuario;
      this.password = password;
    }
  }

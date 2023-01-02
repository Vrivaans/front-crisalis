import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NuevoUsuario } from './../../Models/nuevo-usuario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  //nuevoUsuario!: NuevoUsuario;
  nombre: string = ''
  nombreUsuario: string = ''
  email: string = ''
  password: string = ''

  constructor(private router: Router, private authService:AuthService){}
ngOnInit():void{

}

registrar(){
  const newUser = new NuevoUsuario (this.nombre, this.nombreUsuario, this.email, this.password);
  this.authService.nuevo(newUser).subscribe(
    data => {
      alert("Experiencia añadida");
      this.router.navigate(['/login']);
    }, err => {
      console.log("Hubo un error y no se guardó la información")
      this.router.navigate([''])
    }
  )
}

}

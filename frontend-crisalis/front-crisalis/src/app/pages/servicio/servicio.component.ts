import { Servicio } from './../../Models/servicio';
import { ServicioServicesService } from './../../services/servicio-services.service';
import { Component } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent {
  servicio: Servicio[] = []
  esta_logeado = false;
  constructor( private tokenService: TokenService, private servicioServices: ServicioServicesService  ){}

  ngOnInit(): void {
    this.cargarServicios();
    if (this.tokenService.getToken()) {
      this.esta_logeado = true;
    } else{
      this.esta_logeado = false;
    }
    }


  cargarServicios(): void {
    this.servicioServices.lista().subscribe(data => {this.servicio = data;})
  }
  delete(id?: number): void{
    if(id != null){
      this.servicioServices.delete(id).subscribe(
        data => {
          this.cargarServicios();
        }, err => {
          //alert("Hubo un error al borrar el cliente")
          window.location.reload();
        }
      )
    }
  }



}

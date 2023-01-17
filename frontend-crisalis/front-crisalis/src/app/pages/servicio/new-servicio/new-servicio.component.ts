import { ServicioServicesService } from './../../../services/servicio-services.service';
import { Router } from '@angular/router';
import { Servicio } from './../../../Models/servicio';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-servicio',
  templateUrl: './new-servicio.component.html',
  styleUrls: ['./new-servicio.component.scss']
})
export class NewServicioComponent {
precioBase: number = 0
nombre: string = ""
soportePrecio: number = 0
esEspecial: boolean = false

  constructor(private router: Router, private servicioServices: ServicioServicesService ){}
  ngOnInit():void{
  }


  onCreate() {
    const servicio = new Servicio(this.precioBase,this.nombre,this.soportePrecio, this.esEspecial)
    this.servicioServices.save(servicio).subscribe(
      data =>{

        //this.router.navigate([''])
        window.location.reload();

      }, err => {
        //alert("Hubo un error al cargar")
        window.location.reload();
      }
      )
  }
}

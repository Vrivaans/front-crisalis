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
aplicaIva: boolean = false
  aplicaIBrutos: boolean = false
  aplicaGanancias: boolean = false

  constructor(private router: Router, private servicioServices: ServicioServicesService ){}
  ngOnInit():void{
  }

  ivaChange(){
    if(this.aplicaIva === false){
      this.aplicaIva = true
      console.log("Si aplica IVA")
      console.log("iva " + this.aplicaIva)
    }else
    {
      this.aplicaIva = false
      console.log("No aplica IVA")
      console.log("iva " + this.aplicaIva)
    }
  }

  iBrutosChange(){
    if(this.aplicaIBrutos === false){
      this.aplicaIBrutos = true
      console.log("Si aplica IIBB")
      console.log("iibb " + this.aplicaIBrutos)
    }else
    {
      this.aplicaIBrutos = false
      console.log("No aplica IIBB")
      console.log("iibb " + this.aplicaIBrutos)
    }
  }

  gananciasChange(){
    if(this.aplicaGanancias === false){
      this.aplicaGanancias = true
      console.log("Si aplica Ganancias")
      console.log("ganancias " + this.aplicaGanancias)
    }else
    {
      this.aplicaGanancias = false
      console.log("No aplica Ganancias")
      console.log("ganancias " + this.aplicaGanancias)
    }
  }

  onCreate() {
    const servicio = new Servicio(this.precioBase,this.nombre,this.soportePrecio, this.esEspecial,this.aplicaIva, this.aplicaIBrutos, this.aplicaGanancias)
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

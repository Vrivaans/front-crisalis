import { Servicio } from './../../../Models/servicio';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ServicioServicesService } from 'src/app/services/servicio-services.service';

@Component({
  selector: 'app-edit-servicio',
  templateUrl: './edit-servicio.component.html',
  styleUrls: ['./edit-servicio.component.scss']
})
export class EditServicioComponent {

  precioBase: number = 0
  nombre: string = ""
  soportePrecio: number = 0
  esEspecial: boolean = false
  aplicaIva: boolean = false
  aplicaIBrutos: boolean = false
  aplicaGanancias: boolean = false
  servicio: Servicio = null

    constructor(private router: Router, private servicioServices: ServicioServicesService, private activatedRouter: ActivatedRoute ){}
    ngOnInit():void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.servicioServices.detail(id).subscribe(
        data => { this.servicio = data
        }, err =>{
          alert("Error al modificar")
        }
      )

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

onUpdate(){
  console.log("click")
  const id = this.activatedRouter.snapshot.params['id'];
  this.servicio.precioBase = this.precioBase
  this.servicio.nombre = this.nombre
  this.servicio.soportePrecio = this.soportePrecio
  this.servicio.aplicaGanancias = this.aplicaGanancias
  this.servicio.aplicaIBrutos = this.aplicaIBrutos
  this.servicio.aplicaIva = this.aplicaIva
  this.servicioServices.update(id, this.servicio).subscribe(
    data => {
      this.router.navigate(['/servicios'])

    }, err =>{
      alert("Error al modificar")
    }
  )




}



}

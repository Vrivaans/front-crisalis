import { Producto } from './../../../Models/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProductoServicesService } from 'src/app/services/producto-services.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.scss']
})
export class EditProductoComponent {
  precioBase!: number
  nombre!: string
  aplicaIva!: boolean
  aplicaIBrutos!: boolean
  aplicaGanancias!: boolean
  producto: Producto = null
  constructor(private productoServices: ProductoServicesService, private router: Router, private activatedRouter: ActivatedRoute){}

  ngOnInit():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.productoServices.detail(id).subscribe(
      data => { this.producto = data
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
    const id = this.activatedRouter.snapshot.params['id'];
    this.producto.precioBase = this.precioBase
    this.producto.nombre = this.nombre
    this.producto.aplicaGanancias = this.aplicaGanancias
    this.producto.aplicaIBrutos = this.aplicaIBrutos
    this.producto.aplicaIva = this.aplicaIva
    this.productoServices.update(id, this.producto).subscribe(
      data => {
        this.router.navigate(['/productos'])

      }, err =>{
        alert("Error al modificar")
      }
    )



  }

}




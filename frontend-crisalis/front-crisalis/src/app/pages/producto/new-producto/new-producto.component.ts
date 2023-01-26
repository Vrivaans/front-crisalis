import { Router } from '@angular/router';
import { ProductoServicesService } from './../../../services/producto-services.service';
import { Component } from '@angular/core';
import { Producto } from 'src/app/Models/producto';

@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.scss']
})
export class NewProductoComponent {
precioBase: number = 0
nombre: string = ""
aplicaIva: boolean = false
aplicaIBrutos: boolean = false
aplicaGanancias: boolean = false

constructor(private productoServices: ProductoServicesService, private router: Router){}

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
  const producto = new Producto(this.precioBase,this.nombre,this.aplicaIva, this.aplicaIBrutos, this.aplicaGanancias)
  this.productoServices.save(producto).subscribe(
    data =>{

      //this.router.navigate([''])

    }, err => {
      //alert("Hubo un error al cargar")
      window.location.reload();
    }
    )
}

}

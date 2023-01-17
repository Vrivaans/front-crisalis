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
garantia: number = 0

constructor(private productoServices: ProductoServicesService, private router: Router){}

ngOnInit():void{

}

onCreate() {
  const producto = new Producto(this.precioBase,this.nombre,this.garantia)
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

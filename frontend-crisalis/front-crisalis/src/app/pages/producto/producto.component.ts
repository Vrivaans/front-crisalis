import { ProductoServicesService } from './../../services/producto-services.service';
import { Producto } from './../../Models/producto';
import { Component } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  producto: Producto[] = []
  esta_logeado = false;
  constructor( private tokenService: TokenService, private productoServices: ProductoServicesService){}

  ngOnInit(): void {
    this.cargarProductos();
    if (this.tokenService.getToken()) {
      this.esta_logeado = true;
    } else{
      this.esta_logeado = false;
    }
    }

    cargarProductos(): void{
      this.productoServices.listaProductos().subscribe(data => {this.producto = data;})
    }

    delete(id?:number){
      if(id != null){
        this.productoServices.delete(id).subscribe(
          data => {
            this.cargarProductos();
          }, err => {
            //alert("Hubo un error al borrar el cliente")
            window.location.reload();
          }
        )
      }
    }



}

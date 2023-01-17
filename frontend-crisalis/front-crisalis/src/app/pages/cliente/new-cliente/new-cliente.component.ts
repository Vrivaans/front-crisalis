import { Router } from '@angular/router';
import { ClienteServicesService } from './../../../services/cliente-services.service';
import { Component } from '@angular/core';
import { Cliente } from 'src/app/Models/cliente';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.scss']
})
export class NewClienteComponent {
nombre: string = ""
apellido: string = ""
dniCliente:string =""
cuit: string = ""

constructor(private clienteServicesService: ClienteServicesService, private router:Router){}

ngOnInit():void{

}










onCreate() {
  const cliente = new Cliente(this.apellido,this.nombre,this.dniCliente,this.cuit)
  this.clienteServicesService.save(cliente).subscribe(
    data =>{

      //this.router.navigate([''])
      window.location.reload();
    }, err => {
      alert("Hubo un error al cargar")

    }
    )
}

}

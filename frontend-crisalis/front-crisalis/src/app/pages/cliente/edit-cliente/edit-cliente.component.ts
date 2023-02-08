import { ClienteServicesService } from './../../../services/cliente-services.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Models/cliente';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.scss']
})
export class EditClienteComponent {

nombre!: string
apellido!: string
dniCliente!:string
cliente: Cliente = null

constructor(private clienteServices: ClienteServicesService, private activatedRouter: ActivatedRoute, private router: Router){}

ngOnInit(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.clienteServices.detail(id).subscribe(
    data => { this.cliente = data
    }, err =>{
      alert("Error al modificar")
    }
  )
}


onUpdate(){
  const id = this.activatedRouter.snapshot.params['id'];
  this.cliente.apellido = this.apellido
  this.cliente.nombre = this.nombre
  this.cliente.dniCliente = this.dniCliente
  this.clienteServices.update(id,this.cliente).subscribe(data => {
    this.router.navigate(['/clientes'])
  }, err =>{
    alert("Error al modificar")
  }
  )
}

}

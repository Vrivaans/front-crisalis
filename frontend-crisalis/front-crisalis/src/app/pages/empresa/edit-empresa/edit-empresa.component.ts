import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { EmpresaServicesService } from 'src/app/services/empresa-services.service';
import { Empresa } from 'src/app/Models/empresa';

@Component({
  selector: 'app-edit-empresa',
  templateUrl: './edit-empresa.component.html',
  styleUrls: ['./edit-empresa.component.scss']
})
export class EditEmpresaComponent {

dniCliente!: string
nombre!: string
apellido!: string
cuit!: string
razonSocial!: string
fechaInicioActividades!: string
empresa!: Empresa

constructor(private empresaService: EmpresaServicesService, private activatedRouter: ActivatedRoute, private router: Router){}

ngOnInit(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.empresaService.detail(id).subscribe(
    data => { this.empresa = data
    }, err =>{
      alert("Error al modificar")
    }
  )
}

onUpdate(){
  const id = this.activatedRouter.snapshot.params['id'];
  this.empresa.apellido = this.apellido
  this.empresa.nombre = this.nombre
  this.empresa.dniCliente = this.dniCliente
  this.empresa.cuit = this.cuit
  this.empresa.fechaInicioActividades = this.fechaInicioActividades
  this.empresa.razonSocial = this.razonSocial
  this.empresaService.update(id, this.empresa).subscribe(
    data => {
      this.router.navigate(['/empresas'])

    }, err =>{
      alert("Error al modificar")
    }
  )
}
// this.clienteServices.update(id,this.cliente).subscribe(data => {
//   this.router.navigate(['/clientes'])
// }, err =>{
//   alert("Error al modificar")
// }
}

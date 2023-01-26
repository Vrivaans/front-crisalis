import { EmpresaServicesService } from './../../../services/empresa-services.service';
import { Empresa } from 'src/app/Models/empresa';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-empresa',
  templateUrl: './new-empresa.component.html',
  styleUrls: ['./new-empresa.component.scss']
})
export class NewEmpresaComponent {
dniCliente: string = ""
nombre: string = ""
apellido: string = ""
cuit: string = ""
razonSocial: string = ""
fechaInicioActividades: string = ""

constructor(private empresaService: EmpresaServicesService){}

onCreate() {
  const empresa = new Empresa(this.dniCliente, this.nombre, this.apellido ,this.cuit,this.razonSocial,this.fechaInicioActividades)
  this.empresaService.save(empresa).subscribe(
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

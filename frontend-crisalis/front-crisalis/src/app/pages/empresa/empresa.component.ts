import { EmpresaServicesService } from './../../services/empresa-services.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Empresa } from 'src/app/Models/empresa';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent {
  empresa: Empresa[] = []
  esta_logeado = false;

  constructor(private router: Router, private tokenService: TokenService, private empresaServices: EmpresaServicesService){}

  ngOnInit(): void {
    this.cargarEmpresas();
    if (this.tokenService.getToken()) {
      this.esta_logeado = true;
    } else{
      this.esta_logeado = false;
    }
    }

cargarEmpresas():void{
  this.empresaServices.lista().subscribe(data => {this.empresa = data;})
}
delete(id?:number){
  if(id != null){
    this.empresaServices.delete(id).subscribe(
      data => {
        this.cargarEmpresas();
      }, err => {
        //alert("Hubo un error al borrar el cliente")
        window.location.reload();
      }
    )
  }
}

}

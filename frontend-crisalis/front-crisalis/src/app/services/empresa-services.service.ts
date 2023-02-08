import { ServiciosContratados } from './../Models/serviciosContratados';
import { Empresa } from './../Models/empresa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderE } from '../Models/ordere';

@Injectable({
  providedIn: 'root'
})
export class EmpresaServicesService {

  url = 'http://localhost:8080'
  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Empresa[]>{
      return this.httpClient.get<Empresa[]>(this.url + '/traer/empresas');
  }

  public detail(id:number):Observable<Empresa>{
    return this.httpClient.get<Empresa>(this.url + `/detail-empresa/${id}`)
  }

  public save(empresa: Empresa): Observable<any>{
    return this.httpClient.post<any>(this.url + '/crear/empresa', empresa)
  }

  public update(id: number, empresa: Empresa):Observable<any>{
    return this.httpClient.put<any>(this.url + `/actualizar/empresa/${id}`,empresa)
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `/borrar/empresa/${id}`)
  }
  public serviciosEmpresa(id: number): Observable<ServiciosContratados[]>{
    return this.httpClient.get<ServiciosContratados[]> (this.url + `/traer/servicios/empresa/${id}`)
  }
  public pedidosEmpresa(id: number): Observable<OrderE[]>{
    return this.httpClient.get<OrderE[]>(this.url + `/traer/pedidos/empresa/${id}`)
  }
  public cambiarEstadoServicio(id: number): Observable<any>{
    return this.httpClient.get<any>(this.url + `/estado/servicio/${id}`)
  }
}

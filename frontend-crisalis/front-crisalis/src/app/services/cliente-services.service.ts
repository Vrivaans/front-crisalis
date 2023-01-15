import { Cliente } from './../Models/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ClienteServicesService {

  url = 'http://localhost:8080'
  constructor(private httpClient:HttpClient) { }

  public listaClientes():Observable<Cliente[]>{
      return this.httpClient.get<Cliente[]>(this.url + '/traer/clientes');
  }

  public detail(id:number):Observable<Cliente>{
    return this.httpClient.get<Cliente>(this.url + `/detail/${id}`)
  }

  public save(cliente: Cliente): Observable<any>{
    return this.httpClient.post<any>(this.url + '/crear/cliente', cliente)
  }

  public update(id: number, cliente: Cliente):Observable<any>{
    return this.httpClient.put<any>(this.url + `/actualizar/cliente/${id}`,cliente)
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`)
  }

}

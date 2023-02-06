import { DtoOrder } from './../Models/dtoOrder';
import { OrderE } from './../Models/ordere';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosServicesService {

  url = 'http://localhost:8080'
  constructor(private httpClient:HttpClient) { }

  public lista():Observable<OrderE[]>{
      return this.httpClient.get<OrderE[]>(this.url + '/traer/pedidos');
  }

  public detail(id:number):Observable<OrderE>{
    return this.httpClient.get<OrderE>(this.url + `/detail/${id}`)
  }

  public save(order: OrderE): Observable<any>{
    return this.httpClient.post<any>(this.url + '/crear/pedido', order)
  }

  public saveDto(dtoOrder: DtoOrder): Observable<any>{
    return this.httpClient.post<any>(this.url + '/crear/dtopedido', dtoOrder)
  }

  // public update(id: number, empresa: OrderE):Observable<any>{
  //   return this.httpClient.put<any>(this.url + `/actualizar/empresa/${id}`,empresa)
  // }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `/borrar/pedido/${id}`)
  }

  public cambiarEstado(id: number): Observable<any>{
    return this.httpClient.get<any>(this.url + `/estado/pedido/${id}`)
    console.log("se hizo peticion", + id)

  }
}

import { Producto } from './../Models/producto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicesService {




  url = 'http://localhost:8080'
  constructor(private httpClient:HttpClient) { }

  public listaProductos():Observable<Producto[]>{
      return this.httpClient.get<Producto[]>(`${this.url}/traer/productos`);
  }

  public detail(id:number):Observable<Producto>{
    return this.httpClient.get<Producto>(this.url + `/detail/${id}`)
  }

  public save(producto: Producto): Observable<any>{
    return this.httpClient.post<any>(this.url + '/crear/producto', producto)
  }

  public update(id: number, producto: Producto):Observable<any>{
    return this.httpClient.put<any>(this.url + `/actualizar/producto/${id}`,producto)
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `/borrar/producto/${id}`)
  }
}

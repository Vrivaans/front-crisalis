import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../Models/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioServicesService {



  url = 'http://localhost:8080'
  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Servicio[]>{
    return this.httpClient.get<Servicio[]>(this.url + '/traer/servicios');
}

  public detail(id:number):Observable<Servicio>{
    return this.httpClient.get<Servicio>(this.url + `/detail/${id}`)
  }

  public save(servicio: Servicio): Observable<any>{
    return this.httpClient.post<any>(this.url + '/crear/servicio', servicio)
  }

  public update(id: number, servicio: Servicio):Observable<any>{
    return this.httpClient.put<any>(this.url + `/actualizar/servicio/${id}`,servicio)
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `/borrar/servicio/${id}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Vehicle } from '../pages/vehicles/interfaces/vehicle';
import { Subject, tap } from 'rxjs';
const URL = environment.urlApi;
const headersHttp = new HttpHeaders({
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
});

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  id : string;
  vehicle : Vehicle;
  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }


  get refresh$(){
    return this._refresh$;
  }

  createVehicle(data: any) {
    return this.http.post(`${URL}/api/vehicles`, data, {responseType: 'text'});
  }

  updateVehicle(id : string, data: any) {
    return this.http.put(`${URL}/api/vehicles/${id}`, data, {responseType: 'text'}).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  getVehicleById(id : string){
    return this.http.get<Vehicle>(`${URL}/api/vehicles/${id}`);
  }

  getVehiclesApproved(){
    return this.http.get<Vehicle[]>(`${URL}/api/vehicles/GetVehiclesAproved`);
  }

  getVehiclesUnapproved(){
    return this.http.get<Vehicle[]>(`${URL}/api/vehicles/GetVehiclesUnapproved`);
  }
}

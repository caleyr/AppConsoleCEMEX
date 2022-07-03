import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { VehicleApprovedList } from '../interfaces/VehicleApprovedList';
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

  constructor(private http: HttpClient) { }

  createVehicle(data: any) {
    return this.http.post(`${URL}/api/vehicles`, data);
  }

  updateVehicle(data: any) {
    return this.http.put(`${URL}/api/vehicles`, data);
  }

  getVehiclesApproved(){
    return this.http.get<VehicleApprovedList[]>(`${URL}/api/vehicles`);
  }
}

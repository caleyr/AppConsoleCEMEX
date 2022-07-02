import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const URL = environment.urlApi;
const headersHttp = new HttpHeaders({
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
});

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  createUser(data: any) {
    return this.http.post(`${URL}/api/authentication/CreateUserAdmonPowerCemex`, data);    
  }

  createDrive(data : any){
    return this.http.post(`${URL}/api/authentication/CreateUserDriver`, data);
  }

  createAdminLogistThird(data: any){
    return this.http.post(`${URL}/api/authentication/CreateUserTPLMTruckMan`, data);
  }
}

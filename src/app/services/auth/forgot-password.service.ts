import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.urlApi;
const headersHttp = new HttpHeaders({
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
});

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  email : string;

  constructor(
    private http: HttpClient
  ) { }

  public forgotPassword(data: any) {
    return this.http.post(`${URL}/api/authentication/SendPasswordResetCode`, data, {headers: headersHttp, responseType: 'text'});
  }

  public changePassword(data: any) {
    return this.http.post(`${URL}/api/authentication/ResetPassword`, data, {headers: headersHttp});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Profile } from '../../models/profile.model';
import { UserService } from '../user.service';

const URL = environment.urlApi;
const headersHttp = new HttpHeaders({
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
});

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string = null;
  currentToken: string = null;
  role: string;
  currentRoles: any[] = [];
  manTruck: any = false;
  expiration: string = null;
  user: object = null;

  constructor(
    private http: HttpClient,
    private navCtrl: Router,
    private userService : UserService
  ) { }

  login(data: any) {
    return this.http.post(`${URL}/api/authentication/login`, data, {headers: headersHttp});      
  }

  async getToken(){
    this.currentToken = await sessionStorage.get('token') || null;
  }

  async validateToken(): Promise<boolean>{
    await this.getToken();
    if(!this.currentToken){
      this.navCtrl.navigateByUrl('/login');
      return Promise.resolve(false);
    }
    return Promise.resolve(true);
   }
}

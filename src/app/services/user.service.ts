import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Modelos
import { Profile } from '../models/profile.model';
import { environment } from 'src/environments/environment';
import { UserApprovedList } from '../interfaces/UserApprovedList';
import { UserRequestList } from '../interfaces/UserRequestList';
import { UserDetail } from '../interfaces/UserDetail';
import { User } from '../pages/users/models/user';


const BASE_URL_API = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  id : string = null;

  profileUser: Profile;
  token : string;

  private keyToken = 'token';
  private keyExpiration = 'expiracion';
  private keyRoles = 'roles';  

  constructor( private httpClient: HttpClient ) { }

  getUsersApproved() {
    return this.httpClient.get<UserApprovedList[]>(`${BASE_URL_API}/api/authentication/GetAllUserApproved`);    
  }

  getUserRequestList() {
    return this.httpClient.get<UserRequestList[]>(`${BASE_URL_API}/api/authentication/GetUsersUnapproved`);    
  }

  getUserDetail(id : string) {
    return this.httpClient.get<UserDetail>(`${BASE_URL_API}/api/authentication/GetUserDetail/${id}`);    
  }

  activateUser(email : string, data :  any) {
    return this.httpClient.put(`${BASE_URL_API}/api/authentication/UserActivation/${email}`, data, {responseType: 'text'});    
  }

  logout(){
    sessionStorage.removeItem(this.keyToken);
    sessionStorage.removeItem(this.keyExpiration);
    sessionStorage.removeItem(this.keyRoles);
  }

  async saveDataProfile (token){    
    this.token = token;
    var rol = JSON.parse(window.atob(token.split('.')[1]))["Roles"];
    var exp = JSON.parse(window.atob(token.split('.')[1]))["exp"];

    await sessionStorage.setItem( this.keyRoles , rol);
    await sessionStorage.setItem( this.keyToken , token);
    await sessionStorage.setItem( this.keyExpiration , exp);
  }

  getDataProfile (token){
    var profile : Profile = new Profile();
    profile.FirstName = JSON.parse(window.atob(token.split('.')[1]))["FirstName"];
    profile.LastName = JSON.parse(window.atob(token.split('.')[1]))["LastName"];
    profile.Email = JSON.parse(window.atob(token.split('.')[1]))["Email"];
    profile.CompanyId = JSON.parse(window.atob(token.split('.')[1]))["CompanyId"];
    profile.Document = JSON.parse(window.atob(token.split('.')[1]))["Document"];
    profile.SapCode = JSON.parse(window.atob(token.split('.')[1]))["SapCode"];
    profile.PhoneNumber = JSON.parse(window.atob(token.split('.')[1]))["PhoneNumber"];
    profile.Roles = JSON.parse(window.atob(token.split('.')[1]))["Roles"];
    this.profileUser = profile;
  }

  getDataExpiration (token){
    return JSON.parse(window.atob(token.split('.')[1]))["exp"];
  }

  isLogged(): boolean {
    const token = sessionStorage.getItem(this.keyToken);

    if ( !token ) {
      return false;
    }

    const expiration = this.getDataExpiration(token);
    const expirationDate = new Date(expiration * 1000);  

    if ( expirationDate <= new Date() ) {
      this.logout();
      return false;
    }

    this.getDataProfile(token);
    return true;
  }
}

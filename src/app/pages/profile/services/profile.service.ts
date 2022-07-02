import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../../services/user.service';
import { environment } from 'src/environments/environment';
const URL = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private httpClient: HttpClient,
    private userService: UserService) { }

  updateCurrentUser( data : any, email : string ) {
    return this.httpClient.put(`${URL}/api/authentication/UpdateUserAdmonPowerCemex/${email}`, data, { responseType: 'text'});
  }
}

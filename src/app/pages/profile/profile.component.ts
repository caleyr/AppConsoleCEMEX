import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Profile } from '../../models/profile.model';
import { CompaniesService } from '../../services/companies.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  photoUser: string = '';
  fullNameUser: string = '';
  nameCompanies: string = '';
  perfil : Profile;

  constructor( 
    private router: Router,
    private userService: UserService,
    private companiesService : CompaniesService
    ) { }

  ngOnInit(): void {    
    this.perfil = this.userService.perfil;
    this.fullNameUser = `${this.userService.perfil.FirstName + ' ' + this.userService.perfil.LastName}`;
  }

  updateInfoUser() {
    console.log('actualizar la informacion del usuario...');
    this.router.navigateByUrl('dashboard/perfil/actualizar-perfil');
  }

  /* updateDocuments() {
    console.log('Actualizar los documentos....');
    this.router.navigateByUrl('dashboard/perfil/actualizar-documentos');
  } */

  yourTripCemex() {
    console.log('Ir a a tu viaje CEMEX....');     
  }

  goCleverGlobal() {
    console.log('Ir a clever global....');     
  }
}

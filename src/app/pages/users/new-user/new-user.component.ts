import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Rol } from '../../interfaces/rol';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CompaniesService } from '../../../services/companies.service';
import { Companies } from '../../../models/companies.model';
import { RegisterService } from '../../../services/register.service';
import { Admin } from '../../../interfaces/user';
import { WebcamImage } from 'ngx-webcam';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  loading: boolean = false;
  companiesList : Companies[] = [];
  data : FormData;
  dataUser : Admin = new Admin();
  webcamImage: WebcamImage = null;
  rol: string;

  formUpdateDriver: FormGroup = this.formBuilder.group({
    Roles: ['', [ Validators.required ]],
    FirstName: ['', [ Validators.required ]],
    LastName: ['', [ Validators.required ]],    
    Document: [''],    
    SapCode: [''],
    PhoneNumber: [''],
    Email: [ '', [ Validators.required ]],    
    Password: ['', [ Validators.required ]],
    CompanyId: [''],
    term: [false, [ Validators.requiredTrue ]]
  });

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private companiesService : CompaniesService,
    private registerService : RegisterService,
    private userService: UserService ) {
      this.rol = this.userService.perfil.Roles;
    }

  ngOnInit(): void { 
    this.companiesService.getCompanies().subscribe(data =>{
      this.companiesList = data;
    });
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  goInfoUsers() {
    this.router.navigateByUrl('dashboard/usuarios');
  }

  getStatusField( field: string ) {
    if ( this.formUpdateDriver.controls[field].errors && this.formUpdateDriver.controls[field].touched ) return 'error';

    return 'regular';
  }

  getMsgField( field: string, nameField: string ) {
    let msgError = '';
    
    if ( this.formUpdateDriver.controls[field].errors && this.formUpdateDriver.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }

    return msgError;
  }

  cwcChangeRol(event){    
    this.formUpdateDriver.get('Roles').setValue(event.detail.value);
  }

  cwcChangeCompany(event){
    this.formUpdateDriver.get('CompanyId').setValue(event.detail.value);
  }

  updateDriver() {
    console.log('actualizar datos del conductor...');
    if ( this.formUpdateDriver.invalid ) {
      this.formUpdateDriver.markAllAsTouched();
      return;
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.formUpdateDriver.reset();
      document.getElementById('modal-1').setAttribute('open', 'true');
    }, 3000);
  }

  async createUser(){
    if ( this.formUpdateDriver.invalid ) {
      this.formUpdateDriver.markAllAsTouched();
      return;
    }
    this.data = new FormData();
    var rol = this.formUpdateDriver.controls['Roles'].value;
    if(rol === 'Administrador Logistico Cemex' || rol === 'Power User CEMEX'){
      await this.addDataUser();
      this.registerService.createUser(this.dataUser).subscribe(async resp =>{
        document.getElementById('modal-ok').setAttribute('open', 'true');
        this.loading = false;
      }, (error) =>{
        document.getElementById('modal-error').setAttribute('open', 'true');
        this.loading = false;
      });
    }else if(rol === 'Administrador Logistico Tercero' || rol === 'Hombre Camion'){
      this.addFormData(this.formUpdateDriver.value, rol);
      this.registerService.createAdminLogistThird(this.data).subscribe(async resp =>{
        document.getElementById('modal-ok').setAttribute('open', 'true');
        this.loading = false;
      }, (error) =>{
        document.getElementById('modal-error').setAttribute('open', 'true');
        this.loading = false;
      });
    }else if(rol === 'Conductor'){
      this.addFormDataDrive(this.formUpdateDriver.value, rol);
      this.registerService.createDrive(this.data).subscribe(async resp =>{
        document.getElementById('modal-ok').setAttribute('open', 'true');
        this.loading = false;
      }, (error) =>{
        document.getElementById('modal-error').setAttribute('open', 'true');
        this.loading = false;
      });
    }
  }

  async addFormData(objeto, rol){
    for ( var key in objeto ) {
      if(key !== 'Document' && key !== 'SapCode' && key !== 'term'){      
        console.log(key);
        this.data.append(key, objeto[key]);
      }   
    }
  }

  async addFormDataDrive(objeto, rol){
    for ( var key in objeto ) {
      if(key !== 'term'){
        console.log(key);        
        this.data.append(key, objeto[key]);
      }      
    }
  }

  async addDataUser(){
    this.dataUser.FirstName = this.formUpdateDriver.get('FirstName').value;
    this.dataUser.LastName = this.formUpdateDriver.get('LastName').value;
    this.dataUser.Email = this.formUpdateDriver.get('Email').value;
    this.dataUser.Password = this.formUpdateDriver.get('Password').value;
    this.dataUser.Roles[0] = this.formUpdateDriver.get('Roles').value;
  }

  buttonBack(){
    this.router.navigateByUrl('dashboard/usuarios');
  }

  getRol(){
    return this.formUpdateDriver.controls['Roles'].value;
  }

}

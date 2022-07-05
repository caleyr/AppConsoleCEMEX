import { Component, OnInit } from '@angular/core';
import { Companies } from '../../../models/companies.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CompaniesService } from '../../../services/companies.service';
import { VehicleService } from '../../../services/vehicle.service';
import { Vehicle } from '../interfaces/vehicle';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {

  loading: boolean = false;

  vehicle : Vehicle = new Vehicle();
  companiesList : Observable<Companies[]>;
  data : FormData;

  formNewVehicle: FormGroup;

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private companiesService : CompaniesService,
    private vehicleService : VehicleService,
    private location : Location
    ) {
    }

  ngOnInit(): void {
    this.vehicle = this.vehicleService.vehicle;    
    this.companiesList = this.companiesService.getCompanies().pipe();
    this.getData();
  }

  getData(){
    this.formNewVehicle = this.formBuilder.group({
      Model: [this.vehicle.model, [ Validators.required ]],
      LicenseVehiculo: [this.vehicle.licenseVehiculo , [ Validators.required ]],
      TypeTrailer: [ this.vehicle.typeTrailer , [ Validators.required ]],    
      CompanyId: [ this.vehicle.companyId , [ Validators.required ]],    
      Soat: [ this.vehicle.soat , [ Validators.required ]],
      StatusVehicle: [ this.vehicle.statusVehicle ],
      StatusTravel: [  this.vehicle.statusTravel ],
      term: [true, [ Validators.requiredTrue ]]
    });
  }

  goInfoVehicles() {
    this.location.back();
  }

  getStatusField( field: string ) {
    if ( this.formNewVehicle.controls[field].errors && this.formNewVehicle.controls[field].touched ) return 'error';

    return 'regular';
  }

  getMsgField( field: string, nameField: string ) {
    let msgError = '';
    
    if ( this.formNewVehicle.controls[field].errors && this.formNewVehicle.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }

    return msgError;
  }

  cwcChangeCompany(event){
    this.formNewVehicle.get('CompanyId').setValue(event.detail.value);
  }

  async updateVehicle(){
    if ( this.formNewVehicle.invalid ) {      
      document.getElementById('alert-confirm').setAttribute('open', 'false')
      this.formNewVehicle.markAllAsTouched();
      return;
    }    
    document.getElementById('alert-confirm').setAttribute('open', 'false')
    this.loading = true;
    this.data = new FormData();
    this.addFormData(this.formNewVehicle.value);
    this.vehicleService.updateVehicle(this.vehicle.id, this.data).subscribe(async resp =>{      
      this.loading = false;
      document.getElementById('modal-ok').setAttribute('open', 'true');
    }, (error) =>{
      console.log(error);      
      this.loading = false;
      document.getElementById('modal-error').setAttribute('open', 'true');
    });
  }

  async addFormData(objeto){
    for ( var key in objeto ) {
      if(key !== 'term'){    
        this.data.append(key, objeto[key]);
      }      
    }
  }

  buttonBack(){
    this.location.back();
  }

  getRol(){
    return this.formNewVehicle.controls['Roles'].value;
  }

}

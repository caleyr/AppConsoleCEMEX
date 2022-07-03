import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CompaniesService } from '../../../services/companies.service';
import { Companies } from '../../../models/companies.model';
import { VehicleService } from '../../../services/vehicle.service';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {

  loading: boolean = false;

  companiesList : Companies[] = [];
  data : FormData;

  formNewVehicle: FormGroup = this.formBuilder.group({
    model: ['', [ Validators.required ]],
    licensePlate: ['', [ Validators.required ]],
    trailerType: ['', [ Validators.required ]],    
    companyId: ['', [ Validators.required ]],    
    soat: ['ASD - 123'],
    status: [''],
    travelStatus: [ ''],
    term: [false, [ Validators.requiredTrue ]]
  });

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private companiesService : CompaniesService,
    private vehicleService : VehicleService ) {
    }

  ngOnInit(): void { 
    this.companiesService.getCompanies().subscribe(data =>{
      this.companiesList = data;
    });
  }

  goInfoVehicles() {
    this.router.navigateByUrl('dashboard/vehiculos');
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
    this.formNewVehicle.get('companyId').setValue(event.detail.value);
  }

  async createVehicle(){
    if ( this.formNewVehicle.invalid ) {
      this.formNewVehicle.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.data = new FormData();
    this.addFormData(this.formNewVehicle.value);
    this.vehicleService.createVehicle(this.data).subscribe(async resp =>{      
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
    this.router.navigateByUrl('dashboard/vehiculos');
  }

  getRol(){
    return this.formNewVehicle.controls['Roles'].value;
  }

}

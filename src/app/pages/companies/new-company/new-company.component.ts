import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { ProfileService } from '../../profile/services/profile.service';
import { Profile } from '../../../models/profile.model';
import { CompaniesService } from '../../../services/companies.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {

  formCompany : FormGroup;
  currentUser: Profile;
  loading: boolean = false;
  data : FormData;  

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private companiesService : CompaniesService
     ) { }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(){
    this.formCompany = this.formBuilder.group({
      companyName: [ '', [ Validators.required ]],
      codeSap: [ '', [ Validators.required ]],
      legalRepresentativeName: [ '', [ Validators.required ]],
      legalRepresentativeDocument: [ '', [ Validators.required ]],
      term: [false, [ Validators.requiredTrue ]]
    });
  }

  getStatusField( field: string ) {
    if ( this.formCompany.controls[field].errors && this.formCompany.controls[field].touched ) return 'error';

    return 'regular';
  }

  getMsgField( field: string, nameField: string ) {
    let msgError = '';
    
    if ( this.formCompany.controls[field].errors && this.formCompany.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }

    return msgError;
  }

  goCompanies() {
    this.router.navigateByUrl('/dashboard/empresas');
  }

  buttonBack() {
    this.router.navigateByUrl('/dashboard/empresas');
  }

  async createCompany() {
    if ( this.formCompany.invalid ) {
      this.formCompany.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.data = new FormData();
    await this.addFormData(this.formCompany.value);
    
    this.data.append('rutDocument', 'url');
    this.data.append('chamberOfCommerceDocument', 'url');
    this.data.append('companylegalRepresentativeDocument', 'url');

    this.companiesService.createCompany(this.data).subscribe(()=>{
      document.getElementById('modal-ok').setAttribute('open', 'true');
      this.loading = false;
      }, (error) =>{
        console.log(error);        
        document.getElementById('modal-error').setAttribute('open', 'true');
        this.loading = false;
    });    
  }

  async addFormData(objeto){
    for ( var key in objeto ) {
      if(key !== 'term'){
        this.data.append(key, objeto[key]);
      }   
    }
  }  

}

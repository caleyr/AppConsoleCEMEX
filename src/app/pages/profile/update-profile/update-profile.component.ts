import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { UserService } from '../../../services/user.service';
import { ProfileService } from '../services/profile.service';

// Models
import { Profile } from '../../../models/profile.model';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  formUserUpdate : FormGroup;
  currentUser: Profile;
  loading: boolean = false;
  data : FormData;  

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private profileService: ProfileService ) { }

  ngOnInit(): void {
    this.currentUser = this.userService.profileUser;    
    this.loadProfile();
  }

  loadProfile(){
    this.formUserUpdate = this.formBuilder.group({
      FirstName: [ this.currentUser.FirstName, [ Validators.required ]],
      LastName: [ this.currentUser.LastName, [ Validators.required ]],
      Email: [ this.currentUser.Email, [ Validators.required ]],
      term: [true, [ Validators.requiredTrue ]]
    });
  }

  getStatusField( field: string ) {
    if ( this.formUserUpdate.controls[field].errors && this.formUserUpdate.controls[field].touched ) return 'error';

    return 'regular';
  }

  getMsgField( field: string, nameField: string ) {
    let msgError = '';
    
    if ( this.formUserUpdate.controls[field].errors && this.formUserUpdate.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }

    return msgError;
  }

  goProfile() {
    this.router.navigateByUrl('/dashboard/perfil');
  }

  async UpdateProfile() {
    console.log('actualizar perfil...')
    if ( this.formUserUpdate.invalid ) {
      this.formUserUpdate.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.data = new FormData();
    await this.addFormData(this.formUserUpdate.value);
    this.profileService.updateCurrentUser(this.data, this.currentUser.Email).subscribe( () => {
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

  buttonBack() {
    this.router.navigateByUrl('/dashboard/perfil');
  }

}

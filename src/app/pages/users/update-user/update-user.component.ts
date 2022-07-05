import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user : User = new User();

  loading: boolean = false;

  formUpdateUser : FormGroup; 
  
  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private userService : UserService
     ) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.getData();
  }

  getData(){
    this.formUpdateUser = this.formBuilder.group({
      rol: ['', [ Validators.required ]],
      name: ['', [ Validators.required ]],
      lastName: ['', [ Validators.required ]],
      phone: ['', [ Validators.required ]],
      sap: ['', [ Validators.required ]],
      identification: ['', [ Validators.required ]],
      email: [ { value: '', disabled: true }, [ Validators.required ]],
      company: ['', [ Validators.required ]],
      term: [true, [ Validators.requiredTrue ]]
    });
  
  }

  goInfoUsers() {
    this.router.navigateByUrl('dashboard/usuarios/detalles');
  }

  getStatusField( field: string ) {
    if ( this.formUpdateUser.controls[field].errors && this.formUpdateUser.controls[field].touched ) return 'error';

    return 'regular';
  }

  getMsgField( field: string, nameField: string ) {
    let msgError = '';
    
    if ( this.formUpdateUser.controls[field].errors && this.formUpdateUser.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }

    return msgError;
  }

  changeSelectCompany($event) {
    console.log('cambio la compañia...')
    /* const conveyorId = parseInt(data.detail.value);
      this.form.get('conveyorId').setValue(conveyorId); */
  }

  updateDriver() {
    console.log('actualizar datos del conductor...');
    if ( this.formUpdateUser.invalid ) {
      this.formUpdateUser.markAllAsTouched();
      return;
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.formUpdateUser.reset();
      document.getElementById('modal-1').setAttribute('open', 'true');
    }, 3000);
  }

  closeModal( event ) {
    console.log('cerrar modal... ', event)
    this.router.navigateByUrl('dashboard/usuarios/detalles');
  }

  
}

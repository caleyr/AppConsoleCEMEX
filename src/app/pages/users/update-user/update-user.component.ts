import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  loading: boolean = false;

  formUpdateDriver: FormGroup = this.formBuilder.group({
    rol: ['', [ Validators.required ]],
    name: ['', [ Validators.required ]],
    lastName: ['', [ Validators.required ]],
    phone: ['', [ Validators.required ]],
    sap: ['', [ Validators.required ]],
    identification: ['', [ Validators.required ]],
    email: [ { value: '', disabled: true }, [ Validators.required ]],
    company: ['', [ Validators.required ]],
    term: [false, [ Validators.requiredTrue ]]
  });

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router ) { }

  ngOnInit(): void { }

  goInfoUsers() {
    this.router.navigateByUrl('dashboard/usuarios/detalles');
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

  changeSelectCompany($event) {
    console.log('cambio la compañia...')
    /* const conveyorId = parseInt(data.detail.value);
      this.form.get('conveyorId').setValue(conveyorId); */
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

  closeModal( event ) {
    console.log('cerrar modal... ', event)
    this.router.navigateByUrl('dashboard/usuarios/detalles');
  }

  
}

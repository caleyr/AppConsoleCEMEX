import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {

  showNameFile: boolean = false;
  loading: boolean = false;

  formNewDriver: FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required ]],
    lastName: ['', [ Validators.required ]],
    phone: ['', [ Validators.required ]],
    company: ['', [ Validators.required ]],
    term: [false, [ Validators.requiredTrue ]]
  });

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router ) { }

  ngOnInit(): void { }

  getStatusField( field: string ) {
    if ( this.formNewDriver.controls[field].errors && this.formNewDriver.controls[field].touched ) return 'error';

    return 'regular';
  }

  getMsgField( field: string, nameField: string ) {
    let msgError = '';
    
    if ( this.formNewDriver.controls[field].errors && this.formNewDriver.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }

    return msgError;
  }


  createNewDriver() {
    console.log('crear nuevo conductor...')
    if ( this.formNewDriver.invalid ) {
      this.formNewDriver.markAllAsTouched();
      return;
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.formNewDriver.reset();
      document.getElementById('modal-1').setAttribute('open', 'true');
    }, 3000);
  }

  // showCamera() {
  //   console.log('Mostrar la camara...');
  //   this.showNameFile = true;
  // }

  // uploadFile() {
  //   console.log('Cargar archivo...');
  //   this.showNameFile = true;
  // }

  // cancelFile() {
  //   console.log('Cancelar el archivo...');
  //   this.showNameFile = false;
  // }

  closeModal( event ) {
    console.log('cerrar modal... ', event)
    this.router.navigateByUrl('/dashboard/driver');
  }

}

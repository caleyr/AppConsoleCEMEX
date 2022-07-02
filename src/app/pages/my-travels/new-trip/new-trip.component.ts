import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent implements OnInit {

  loading: boolean = false;

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router ) { }

    
  ngOnInit(): void { }

  
  formCreateTrip: FormGroup = this.formBuilder.group({
    origin: ['', [ Validators.required ]],
    destination: ['', [ Validators.required ]],
    product: ['', [ Validators.required ]],
    amount: [''],
    date: ['', [ Validators.required ]],
    startTime: ['', [ Validators.required ]],
    client: ['', [ Validators.required ]],
    vehicle: [''],
    licensePlate: [''],
    driver: [''],
    latitude: [''],
    length: ['']
  });
  

  goMyTravels() {
    this.router.navigateByUrl('dashboard/mis-viajes');
  }

  getStatusField( field: string ) {
    if ( this.formCreateTrip.controls[field].errors && this.formCreateTrip.controls[field].touched ) return 'error';

    return 'regular';
  }

  getMsgField( field: string, nameField: string ) {
    let msgError = '';
    
    if ( this.formCreateTrip.controls[field].errors && this.formCreateTrip.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }

    return msgError;
  }

  changeSelectCompany($event) {
    console.log('cambio la compañia...')
    /* const conveyorId = parseInt(data.detail.value);
      this.form.get('conveyorId').setValue(conveyorId); */
  }

  newTrip() {
    console.log('actualizar datos del conductor...');
    if ( this.formCreateTrip.invalid ) {
      this.formCreateTrip.markAllAsTouched();
      return;
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.formCreateTrip.reset();
      document.getElementById('modal-1').setAttribute('open', 'true');
    }, 3000);
  }

  closeModal( event ) {
    console.log('cerrar modal... ', event)
    this.router.navigateByUrl('dashboard/usuarios/detalles');
  }
}

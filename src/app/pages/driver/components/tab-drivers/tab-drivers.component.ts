import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-drivers',
  templateUrl: './tab-drivers.component.html',
  styleUrls: ['./tab-drivers.component.css']
})
export class TabDriversComponent implements OnInit {

  hasTrip: boolean = false;
  showModalAppointment: boolean = false;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  editarDriver() {
    console.log('aqui editamos el driver...')
    this.router.navigateByUrl('dashboard/driver/actualizar-conductor');
  }

  updateDocsDriver() {
    console.log('aqui actulaizamos los documentos del driver...')
    this.router.navigateByUrl('dashboard/driver/actualizar-documentos');
  }

  assignAppointment() {
    console.log('aqui asignamos una cita al driver...')
    this.showModalAppointment = true;
    document.getElementById('modal-assign-appointment').setAttribute('open', 'true')
  }

  assignAppointmentDriver() {
    console.log('asingar viaje.....'); 
    this.showModalAppointment = false;
    document.getElementById('modal-assign-appointment').setAttribute('open', 'false')
    document.getElementById('modal-confirm').setAttribute('open', 'true')
  }

  closeModalAssignAppointment( event ) {
    this.showModalAppointment = false;
    console.log('cerrar modal... ', event)  
  }
  closeModalConfirm( event ) {
    this.hasTrip = true;
    console.log('cerrar modal... ', event)
  }

  reviewTrip() {
    console.log('Revisar viaje...'); 
    this.router.navigateByUrl('dashboard/mis-viajes/detatalle');
  }

}

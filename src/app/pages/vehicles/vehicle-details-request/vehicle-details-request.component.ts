import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { VehicleService } from '../../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-details-request',
  templateUrl: './vehicle-details-request.component.html',
  styleUrls: ['./vehicle-details-request.component.css']
})
export class VehicleDetailsRequestComponent implements OnInit {

  vehicle : Vehicle = new Vehicle();
  id : string;

  showModalReject: boolean = false;

  constructor( 
    private router: Router,
    private vehicleService : VehicleService
  ) { }

  ngOnInit(): void {  
    this.getData();
  }

  getData(){
    if(this.vehicleService.id !== null){
      this.id = this.vehicleService.id;
      this.vehicleService.getVehicleById(this.id).subscribe(data=>{
        this.vehicle = data;
        this.vehicle.id = null;
      });
    }    
  }

  goUsers() {
    this.router.navigateByUrl('/dashboard/vehiculos');
  }

  callUser() {
    console.log('llamar al usuario...')
  }

  rejectRequest() {
    console.log('rechazar solicitud...')
    this.showModalReject = true;
    document.getElementById('modal-reject-request').setAttribute('open', 'true')
  }

  acceptRequest() {
    /*var data : FormData = new FormData();
    data.append('Email', this.user.email);
    data.append('Status', '2');
    this.userService.activateUser(this.user.email, data).subscribe(()=>{
      document.getElementById('modal-ok').setAttribute('open', 'true')
    });*/
  }

  modalBtnAccept() {
    console.log('aceptar el rechazo de la solicitud... ')  
    this.showModalReject = false;
    document.getElementById('modal-reject-request').setAttribute('open', 'false')
    document.getElementById('modal-confirm-reject-request').setAttribute('open', 'true')
  }

  closeModalRejectRequest( event ) {
    this.showModalReject = false;
    console.log('cerrar modal... ', event)  
  }
  
  closeModalConfirmReject( event ) {
    console.log('cerrar modal... ', event)
  }

  buttonBack(){
    this.router.navigateByUrl('dashboard/vehiculos');

  }
}

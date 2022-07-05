import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle';
import { VehicleService } from '../../../services/vehicle.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  vehicle : Vehicle = new Vehicle();
  id : string;

  showModalReject: boolean = false;

  suscripcion : Subscription;

  constructor( 
    private router: Router,
    private vehicleService : VehicleService,
    public location: Location
  ) { }

  ngOnInit(): void {  
    this.suscripcion = this.vehicleService.refresh$.subscribe(() =>{
      this.getData();
    });
    this.getData();
  }

  getData(){
    if(this.vehicleService.id !== null){
      this.id = this.vehicleService.id;
      this.vehicleService.getVehicleById(this.id).subscribe(data=>{
        this.vehicle = data;
      });
    }    
  }

  updateVehicle(){
    this.vehicleService.vehicle = this.vehicle;
    this.router.navigateByUrl('/dashboard/vehiculos/actualizar');
  }

  buttonBack(){
    this.router.navigateByUrl('dashboard/vehiculos');
  }

}

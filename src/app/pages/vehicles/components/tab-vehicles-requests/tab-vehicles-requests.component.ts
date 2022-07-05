import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle';
import { VehicleService } from '../../../../services/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-vehicles-requests',
  templateUrl: './tab-vehicles-requests.component.html',
  styleUrls: ['./tab-vehicles-requests.component.css']
})
export class TabVehiclesRequestsComponent implements OnInit {

  vehicleList : Vehicle[] = [];
  constructor(
    private vehicleService : VehicleService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  detailUser( id: string ) {
    this.vehicleService.id = id;    
    this.router.navigateByUrl('/dashboard/vehiculos/detalles-solicitud');
  }

  getData(){
    this.vehicleService.getVehiclesUnapproved().subscribe(data=>{
      this.vehicleList = data;   
    });
  }

}

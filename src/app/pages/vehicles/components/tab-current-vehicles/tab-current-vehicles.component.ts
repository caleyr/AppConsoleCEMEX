import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleApprovedList } from '../../../../interfaces/VehicleApprovedList';
import { VehicleService } from '../../../../services/vehicle.service';

@Component({
  selector: 'app-tab-current-vehicles',
  templateUrl: './tab-current-vehicles.component.html',
  styleUrls: ['./tab-current-vehicles.component.css']
})
export class TabCurrentVehiclesComponent implements OnInit {

  listVehicles : VehicleApprovedList[] = [];

  constructor( 
    private router: Router,
    private vehicleService : VehicleService
     ) { }

  ngOnInit(): void { 
    this.getData();
   }

  detailUser( id: string ) {
    this.vehicleService.id = id;    
    this.router.navigateByUrl('/dashboard/usuarios/detalles');
  }

  getData(){
    this.vehicleService.getVehiclesApproved().subscribe(data=>{
      this.listVehicles = data;   
    });
  }

}

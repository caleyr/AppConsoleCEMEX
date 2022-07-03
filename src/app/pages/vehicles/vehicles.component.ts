import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  tabVehiclesRequests: boolean = false;
  tabCurrentVehicles: boolean = true;

  constructor( private router: Router ) { }

  ngOnInit(): void { }

  goHome() {
    this.router.navigateByUrl('/');
  }

  addNewVehicle() {
    this.router.navigateByUrl('/dashboard/vehiculos/agregar');
  }

  cwcTabActivated( event: CustomEvent ) {  
    if ( event.detail === 'solicitudes' ) {
      this.tabVehiclesRequests = true;
      this.tabCurrentVehicles = false;
    } else {
      this.tabVehiclesRequests = false;
      this.tabCurrentVehicles = true;
    }
  }

}

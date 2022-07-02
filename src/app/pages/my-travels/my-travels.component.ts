import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-travels',
  templateUrl: './my-travels.component.html',
  styleUrls: ['./my-travels.component.css']
})
export class MyTravelsComponent implements OnInit {

  tabTripsRequests: boolean = false;
  tabPreviousTrips: boolean = true;
  tabScheduledTrips: boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  
  addNewTrip() {
    console.log('crear un nuevo viaje...');
    this.router.navigateByUrl('/dashboard/mis-viajes/agregar');
  }

  cwcTabActivated( event: CustomEvent ) {  
    if ( event.detail === 'anteriores' ) {
      this.tabTripsRequests = false;
      this.tabPreviousTrips = true;
      this.tabScheduledTrips = false;
    } else if( event.detail === "programados" ){
      this.tabTripsRequests = false;
      this.tabPreviousTrips = false;
      this.tabScheduledTrips = true;
    } else if( event.detail === "solicitudes"){
      this.tabTripsRequests = true;
      this.tabPreviousTrips = false;
      this.tabScheduledTrips = false;
    }
  }

}

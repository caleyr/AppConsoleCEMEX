import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-trips-requests',
  templateUrl: './tab-trips-requests.component.html',
  styleUrls: ['./tab-trips-requests.component.css']
})
export class TabTripsRequestsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  detailTrip( id: string ) {
    console.log('Ver informacion del viaje...');
    this.router.navigateByUrl('dashboard/mis-viajes/ver-solicitud-viaje')
  }

}

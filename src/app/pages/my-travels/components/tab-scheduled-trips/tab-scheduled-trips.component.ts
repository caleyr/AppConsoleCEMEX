import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-scheduled-trips',
  templateUrl: './tab-scheduled-trips.component.html',
  styleUrls: ['./tab-scheduled-trips.component.css']
})
export class TabScheduledTripsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  detailTrip( id: string ) {
    console.log('Ver informacion del viaje...');
    this.router.navigateByUrl('dashboard/mis-viajes/ver-viaje-programado')
  }

}

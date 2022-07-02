import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-previous-trips',
  templateUrl: './tab-previous-trips.component.html',
  styleUrls: ['./tab-previous-trips.component.css']
})
export class TabPreviousTripsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  detailTrip( id: string ) {
    console.log('Ver informacion del viaje...');
    this.router.navigateByUrl('dashboard/mis-viajes/ver-viaje-anterior')
  }

}

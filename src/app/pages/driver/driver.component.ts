import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  tabSolicitudes: boolean = false;
  tabConductores: boolean = true;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }
  
  cwcTabActivated(event: CustomEvent) {  
    console.log('eventos: ', event.detail)
    if ( event.detail === 'solicitudes' ) {
      this.tabSolicitudes = true;
      this.tabConductores = false;
    } else {
      this.tabSolicitudes = false;
      this.tabConductores = true;
    }
  } 

  addNewDriver() {
    console.log('Agregar un nuevo driver...');
    this.router.navigateByUrl('dashboard/driver/agregar-conductor');
  }

}

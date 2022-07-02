import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-users-requests',
  templateUrl: './tab-users-requests.component.html',
  styleUrls: ['./tab-users-requests.component.css']
})
export class TabUsersRequestsComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void { }

  detailUser( user: string ) {
    console.log('Ver informacion del usuario...'); 
    this.router.navigateByUrl('/dashboard/usuarios/detalles-solicitud');
  }

}

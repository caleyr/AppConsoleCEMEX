import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-current-users',
  templateUrl: './tab-current-users.component.html',
  styleUrls: ['./tab-current-users.component.css']
})
export class TabCurrentUsersComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {  }

  detailUser( user: string ) {
    console.log('Ver informacion del usuario...');
    this.router.navigateByUrl('dashboard/usuarios/detalles')
  }

}

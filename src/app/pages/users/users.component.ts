import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  tabUsersRequests: boolean = false;
  tabCurrentUsers: boolean = true;

  constructor( private router: Router ) { }

  ngOnInit(): void { }

  goHome() {
    this.router.navigateByUrl('/');
  }

  addNewUser() {
    console.log('crear unnuevo usuario...');
    this.router.navigateByUrl('/dashboard/usuarios/agregar');
  }

  cwcTabActivated( event: CustomEvent ) {  
    if ( event.detail === 'solicitudes' ) {
      this.tabUsersRequests = true;
      this.tabCurrentUsers = false;
    } else {
      this.tabUsersRequests = false;
      this.tabCurrentUsers = true;
    }
  }

}

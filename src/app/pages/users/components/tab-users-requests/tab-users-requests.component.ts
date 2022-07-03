import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserRequestList } from '../../../../interfaces/UserRequestList';
import { UserService } from '../../../../services/user.service';
import { DetailRequestUserComponent } from '../../detail-request-user/detail-request-user.component';

@Component({
  selector: 'app-tab-users-requests',
  templateUrl: './tab-users-requests.component.html',
  styleUrls: ['./tab-users-requests.component.css']
})
export class TabUsersRequestsComponent implements OnInit {

  userList : UserRequestList[] = [];

  constructor( 
    private router: Router,
    private userService : UserService
    ) { }

  ngOnInit(): void {
    this.getData();
   }

  detailUser( id: string ) {
    this.userService.id = id;    
    this.router.navigateByUrl('/dashboard/usuarios/detalles-solicitud');
  }

  getData(){
    this.userService.getUserRequestList().subscribe(data=>{
      this.userList = data;
    });
  }

}

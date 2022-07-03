import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApprovedList } from 'src/app/interfaces/UserApprovedList';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-tab-current-users',
  templateUrl: './tab-current-users.component.html',
  styleUrls: ['./tab-current-users.component.css']
})
export class TabCurrentUsersComponent implements OnInit {

  listUsers : UserApprovedList[] = [];

  constructor( 
    private router: Router,
    private userService : UserService
     ) { }

  ngOnInit(): void { 
    this.getData();
   }

  detailUser( id: string ) {
    this.userService.id = id;    
    this.router.navigateByUrl('/dashboard/usuarios/detalles');
  }

  getData(){
    this.userService.getUsersApproved().subscribe(data=>{
      this.listUsers = data;   
    });
  }
}

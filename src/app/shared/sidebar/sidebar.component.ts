import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( 
    private router: Router,
    private userService: UserService ) { }

  ngOnInit(): void {
  }

  logout() {
    console.log('cerrar la sesion...');
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }

}

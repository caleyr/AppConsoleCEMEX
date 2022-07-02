import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: string = '';

  constructor( private userService: UserService ) { }

  ngOnInit(): void {
    this.user = `${this.userService.perfil.FirstName + ' ' + this.userService.perfil.LastName}`;
  }

}

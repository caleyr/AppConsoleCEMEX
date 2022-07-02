import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  photoUser: string = '';
  fullNameUser: string = '';

  constructor( 
    private router: Router,
    private userService: UserService ) { }

  ngOnInit(): void {
    this.fullNameUser = `${this.userService.perfil.FirstName + ' ' + this.userService.perfil.LastName}`;
  }

  goProfile() {
    console.log('Ir al perfil...');
    this.router.navigateByUrl('/dashboard/perfil');
  }

}

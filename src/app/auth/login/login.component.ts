import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Servicios
import { UserService } from '../../services/user.service';
import { tap } from 'rxjs';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  msg : string = '';

  formLogin: FormGroup = this.formBuilder.group({
    email: ['', [ Validators.required ]],
    password: ['', [ Validators.required ]]
  });
  //TODO: falta validar que la contraseña  contengan como mínimo una mayúscula, una minúscula, un número y un carácter especial

  constructor( 
    private formBuilder: FormBuilder,
    private userService: UserService, 
    private router: Router,
    private loginService : LoginService
     ) { }

  ngOnInit(): void {  }

  getStatusField( field: string ) {
    if ( this.formLogin.controls[field].errors && this.formLogin.controls[field].touched ) return 'error';

    return 'regular';
  }

  getMsgField( field: string, nameField: string ) {
    let msgError = '';
    
    if ( this.formLogin.controls[field].errors && this.formLogin.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }

    return msgError;
  }

  async onSubmit() {    
    if ( this.formLogin.invalid ) {
      this.formLogin.markAllAsTouched();
      return;
    }
        
    this.loading = true;

    await this.loginService.login(this.formLogin.value).subscribe(async resp =>{
      var rol = JSON.parse(window.atob(resp['token'].split('.')[1]))["Roles"];
      if(rol === 'Administrador Logistico Cemex' || rol === 'Power User CEMEX' ){
        this.loginService.getData(resp['token']);
        this.router.navigateByUrl('/dashboard');
        this.loading = false;
      }else{
        this.loading = false;
        this.msg = 'Usuario existente no autorizado.'
        document.getElementById('modal-1').setAttribute('open', 'true');
      }  
    },(error) =>{
      this.loading = false;
      this.msg = 'Correo o contraseña inconrrectos.'
      document.getElementById('modal-1').setAttribute('open', 'true');
    }
    );
  }

  createUser(){
    this.router.navigateByUrl('/registro');
  }

  resetPassword(){
    this.router.navigateByUrl('/reset-password');
  }
}

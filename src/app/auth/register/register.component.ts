import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/auth/login.service';
import { RegisterService } from '../../services/register.service';
import { Admin } from 'src/app/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRegister : Admin = new Admin();
  loading: boolean = false;
  msg : string = '';

  formRegister: FormGroup = this.formBuilder.group({
    FirstName: ['', [ Validators.required ]],
    LastName: ['', [ Validators.required ]],
    Email: ['', [ Validators.required ]],
    Password: ['', [ Validators.required ]],
    Roles: ['', [ Validators.required ]],
  });
  //TODO: falta validar que la contraseña  contengan como mínimo una mayúscula, una minúscula, un número y un carácter especial

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService : RegisterService ) { }

  ngOnInit(): void {  }

  getStatusField( field: string ) {
    if ( this.formRegister.controls[field].errors && this.formRegister.controls[field].touched ) return 'error';
    return 'regular';
  }

  getMsgField( field: string, nameField: string ) {
    let msgError = '';
    
    if ( this.formRegister.controls[field].errors && this.formRegister.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }

    return msgError;
  }

  async onSubmit() {    
    if ( this.formRegister.invalid ) {
      this.formRegister.markAllAsTouched();
      return;
    }
    document.getElementById('alert-confirm').setAttribute('open', 'true');
  }

  createUser(){
    this.router.navigateByUrl('/registro');
  }

  async register(){
    await document.getElementById('alert-confirm').setAttribute('open', 'false');
    this.userRegister.FirstName = this.formRegister.get('FirstName').value;
    this.userRegister.LastName = this.formRegister.get('LastName').value;
    this.userRegister.Email = this.formRegister.get('Email').value;
    this.userRegister.Password = this.formRegister.get('Password').value;
    this.userRegister.Roles[0] = this.formRegister.get('Roles').value['value'];
    console.log(this.userRegister);    
    this.loading = true;
    setTimeout(async () => {
      await this.registerService.createUser(this.userRegister).subscribe(async resp =>{
        document.getElementById('modal-ok').setAttribute('open', 'true');
        this.loading = false;
      },(error) =>{
        this.loading = false;
        console.log(error);        
        this.msg = 'Correo o contraseña inconrrectos.'
        document.getElementById('modal-error').setAttribute('open', 'true');
      }
      );
    }, 1000);
  }

  buttonBack(){
    this.router.navigateByUrl('/login');
  }

}

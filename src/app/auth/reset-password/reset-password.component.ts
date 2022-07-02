import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { LoginService } from '../../services/auth/login.service';
import { ForgotPasswordService } from '../../services/auth/forgot-password.service';

// Services

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup;
  alertSuccess = false;
  loadingShow = false
  errors = [];
  statusInputPassword = 'regular'
  statusInputConfirmedPassword = 'regular'
  statusInputMessagePassword = ''
  statusInputMessageConfirmedPassword = ''
  
  constructor(
     private formBuilder: FormBuilder,
     private route: ActivatedRoute,
     private forgotPasswordService : ForgotPasswordService
  ) {
    this.formBuilderInput()
   }

  ngOnInit(): void {
     //this.form.get("token").setValue(this.route.snapshot.queryParams["token"]) /*Obetenemos el token de la url*/
     //this.form.get("email").setValue(this.route.snapshot.queryParams["email"]) /*Obetenemos el correo electrónico de la url*/
  }

    /*=============================================
    FUNCIÓN PARA CAMBIAR LA CONTRASEÑA DEL LADO SERVIDOR
   =============================================*/
  async resetPassword(){
    if(this.form.invalid) return

    this.loadingShow = true;
    await this.forgotPasswordService.forgotPassword(this.form.value).subscribe(async resp =>{
      this.forgotPasswordService.email = this.form.get('Email').value;
      this.loadingShow = false;
      this.alertSuccess = true;
      }, (error)=>{
        console.log(error);        
        this.loadingShow = false;
        this.errors.push(error.error);
      }
    );
  }

  /*=============================================
   FUNCIÓN PARA LIMPIAR LOS CAMPOS LUEGO DE CAMBIAR LA CONTRASEÑA
  =============================================*/
  clearForm(){
    this.form.reset()
  }

  /*=============================================
   FORMULARIOS REACTIVOS
  =============================================*/
  formBuilderInput(){
    this.form = this.formBuilder.group({
      Email: ['', [ Validators.required]]
    })
    
    this.form.valueChanges
    .pipe(
      debounceTime(350),
    )
    .subscribe(data => {
       this.validateInput()
    });
  }
  /*=============================================
   FUNCIÓN PARA VALIDAR LOS CAMPOS
  =============================================*/
  validateInput(){
    if(this.form.get("Email").errors && this.form.get("Email").dirty){
      this.statusInputPassword = 'error'
      this.statusInputMessagePassword = 'Este campo es requerido'
     }else{
      this.statusInputPassword = 'regular'
      this.statusInputMessagePassword = ''
     }
  }
}

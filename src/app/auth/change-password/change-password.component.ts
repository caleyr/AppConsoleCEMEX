import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ForgotPasswordService } from '../../services/auth/forgot-password.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup;
  email: string = null;
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
    this.email = forgotPasswordService.email;
   }

  ngOnInit(): void {    
    this.formBuilderInput()
  }


  async changePassword(){
    if(this.form.invalid) return
    this.loadingShow = true;

    await this.forgotPasswordService.changePassword(this.form.value).subscribe(async resp =>{
      this.forgotPasswordService.email = '';
      this.loadingShow = false;
      this.alertSuccess = true;
      }, (error)=>{
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
      Email: [this.email, [
        Validators.required,
      ]],
      Otp: ['', [
        Validators.required,
      ]],
      NewPassword: ['', [
        Validators.required,
      ]],
    });
    
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

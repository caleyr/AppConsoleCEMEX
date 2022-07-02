import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Modulos
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { ComponentsModule } from '../components/components.module';

// Componentes
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
    RegisterComponent,
    ChangePasswordComponent,
  ],
  exports: [
    LoginComponent,
    ResetPasswordComponent,
    RegisterComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    CmxWebComponentsModule.forRoot()
  ]
})
export class AuthModule { }

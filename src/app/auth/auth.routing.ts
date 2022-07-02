import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


const routes: Routes = [
    { path: 'change-password', component: ChangePasswordComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent }    
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule {}

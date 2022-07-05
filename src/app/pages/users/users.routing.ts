import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

// Components
import { UsersComponent } from './users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { DetailRequestUserComponent } from './detail-request-user/detail-request-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateDocumentsUserComponent } from './update-documents-user/update-documents-user.component';
import { AuthGuard } from '../../guards/auth.guard';


const childUserRoutes: Routes = [
  { path: 'usuarios', component: UsersComponent, data: { title: 'Usuarios' } },
  { path: 'usuarios/agregar', component: NewUserComponent, data: { title: 'Crear usuario' } },
  { path: 'usuarios/detalles', component: DetailsUserComponent, data: { title: 'Detalles del usuario' } , canLoad: [ AuthGuard ]},
  { path: 'usuarios/detalles-solicitud', component: DetailRequestUserComponent, data: { title: 'Detalles solicitud usuario' } },
  { path: 'usuarios/actualizar', component: UpdateUserComponent, data: { title: 'Actualizar usuario' } },
  { path: 'usuarios/actualizar-documentos', component: UpdateDocumentsUserComponent, data: { title: 'Actualizar documentos' } },
];


@NgModule({
  imports: [ 
    RouterModule.forChild(childUserRoutes) 
  ],
  exports: [ RouterModule ]
})
export class UsersRoutingModule { }
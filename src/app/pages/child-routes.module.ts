import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Modules
import { UsersRoutingModule } from './users/users.routing';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';

import { MyTravelsComponent } from './my-travels/my-travels.component';
import { TripDetailsComponent } from './my-travels/trip-details/trip-details.component';

import { DriverComponent } from './driver/driver.component';
import { NewDriverComponent } from './driver/new-driver/new-driver.component';
import { UpdateDriverComponent } from './driver/update-driver/update-driver.component';
import { UpdateDocumentsDriverComponent } from './driver/update-documents-driver/update-documents-driver.component';

import { VehiclesComponent } from './vehicles/vehicles.component';

import { CompaniesComponent } from './companies/companies.component';

import { WaitingListComponent } from './waiting-list/waiting-list.component';

import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './profile/update-profile/update-profile.component';
import { MyTravelsRoutingModule } from './my-travels/my-travels.routing';
import { CompaniesRoutingModule } from './companies/companies.routing';
import { VehiclesRoutingModule } from './vehicles/vehicles.routing';



const childRoutes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },

  { path: 'mis-viajes', component: MyTravelsComponent, data: { title: 'Mis viajes' } },
  { path: 'mis-viajes/detatalle', component: TripDetailsComponent, data: { title: 'Detalle del viaje' } },

  // path: '/usuarios' => UsersRoutingModule  
  
  { path: 'driver', component: DriverComponent, data: { title: 'Driver' } },
  { path: 'driver/agregar-conductor', component: NewDriverComponent, data: { title: 'Agregar conductor' } },
  { path: 'driver/actualizar-conductor', component: UpdateDriverComponent, data: { title: 'Actualizar conductor' } },
  { path: 'driver/actualizar-documentos', component: UpdateDocumentsDriverComponent, data: { title: 'Actualizar documentos' } },

  { path: 'lista-de-espera', component: WaitingListComponent, data: { title: 'Lista de espera' } },
  
  { path: 'perfil', component: ProfileComponent, data: { title: 'Perfil' } },
  { path: 'perfil/actualizar-perfil', component: UpdateProfileComponent, data: { title: 'Actualizar Perfil' } },
  /* { path: 'perfil/actualizar-documentos', component: UpdateDocumentsComponent, data: { title: 'Actualizar documentos' } }, */
];


@NgModule({
  imports: [ 
    RouterModule.forChild(childRoutes),
    UsersRoutingModule,
    MyTravelsRoutingModule,
    CompaniesRoutingModule,
    VehiclesRoutingModule
  ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }

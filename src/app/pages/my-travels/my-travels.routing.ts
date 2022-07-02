import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MyTravelsComponent } from './my-travels.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { DetailsScheduledTripComponent } from './details-scheduled-trip/details-scheduled-trip.component';
import { DetailsPreviousTripComponent } from './details-previous-trip/details-previous-trip.component';
import { DetailsRequestTripComponent } from './details-request-trip/details-request-trip.component';

const childUserRoutes: Routes = [
  { path: 'mis-viajes', component: MyTravelsComponent, data: { title: 'Mis viajes' } },
  { path: 'mis-viajes/agregar', component: NewTripComponent, data: { title: 'Crear viaje' } },
  { path: 'mis-viajes/ver-viaje-anterior', component: DetailsPreviousTripComponent, data: { title: 'Crear viaje' } },
  { path: 'mis-viajes/ver-viaje-programado', component: DetailsScheduledTripComponent, data: { title: 'Crear viaje' } },
  { path: 'mis-viajes/ver-solicitud-viaje', component: DetailsRequestTripComponent, data: { title: 'Crear viaje' } },
];


@NgModule({
  imports: [ 
    RouterModule.forChild(childUserRoutes) 
  ],
  exports: [ RouterModule ]
})
export class MyTravelsRoutingModule { }
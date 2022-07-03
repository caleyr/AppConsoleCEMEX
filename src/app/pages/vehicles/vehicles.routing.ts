import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesComponent } from './vehicles.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { NewVehicleComponent } from './new-vehicle/new-vehicle.component';

// Components



const childUserRoutes: Routes = [
  { path: 'vehiculos', component: VehiclesComponent, data: { title: 'Vehiculos' } },
  { path: 'vehiculos/agregar', component: NewVehicleComponent, data: { title: 'Crear vehiculos' } },
  { path: 'vehiculos/actualizar', component: UpdateVehicleComponent, data: { title: 'Actualizar vehiculos' } },
];


@NgModule({
  imports: [ 
    RouterModule.forChild(childUserRoutes) 
  ],
  exports: [ RouterModule ]
})
export class VehiclesRoutingModule { }
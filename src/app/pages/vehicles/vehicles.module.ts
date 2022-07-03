import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { VehiclesComponent } from './vehicles.component';
import { TabCurrentVehiclesComponent } from './components/tab-current-vehicles/tab-current-vehicles.component';
import { TabVehiclesRequestsComponent } from './components/tab-vehicles-requests/tab-vehicles-requests.component';
import { NewVehicleComponent } from './new-vehicle/new-vehicle.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';



@NgModule({
  declarations: [
    VehiclesComponent,
    TabCurrentVehiclesComponent,
    TabVehiclesRequestsComponent,
    NewVehicleComponent,
    UpdateVehicleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CmxWebComponentsModule.forRoot(),
  ]
})
export class VehiclesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from './users/users.module';
import { DriverModule } from './driver/driver.module';
import { ProfileModule } from './profile/profile.module';

// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { MyTravelsModule } from './my-travels/my-travels.module';
import { CompaniesModule } from './companies/companies.module';
import { VehiclesModule } from './vehicles/vehicles.module';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    DriverComponent,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    DriverComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    UsersModule,
    MyTravelsModule,
    CompaniesModule,
    VehiclesModule,
    DriverModule,
    ProfileModule,
    CmxWebComponentsModule.forRoot()
  ]
})
export class PagesModule { }

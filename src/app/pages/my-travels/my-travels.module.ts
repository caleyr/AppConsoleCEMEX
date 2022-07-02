import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TabPreviousTripsComponent } from './components/tab-previous-trips/tab-previous-trips.component';
import { TabScheduledTripsComponent } from './components/tab-scheduled-trips/tab-scheduled-trips.component';
import { TabTripsRequestsComponent } from './components/tab-trips-requests/tab-trips-requests.component';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { MyTravelsComponent } from './my-travels.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsPreviousTripComponent } from './details-previous-trip/details-previous-trip.component';
import { DetailsScheduledTripComponent } from './details-scheduled-trip/details-scheduled-trip.component';
import { DetailsRequestTripComponent } from './details-request-trip/details-request-trip.component';



@NgModule({
  declarations: [
    MyTravelsComponent,
    TripDetailsComponent,
    TabPreviousTripsComponent,
    TabScheduledTripsComponent,
    TabTripsRequestsComponent,
    NewTripComponent,
    DetailsPreviousTripComponent,
    DetailsScheduledTripComponent,
    DetailsRequestTripComponent,
  ],
  exports: [
    TripDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CmxWebComponentsModule.forRoot()
  ]
})
export class MyTravelsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ReactiveFormsModule } from '@angular/forms';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

// Components
import { CompaniesComponent } from './companies.component';
import { ListCompaniesComponent } from './components/list-companies/list-companies.component';
import { BrowserModule } from '@angular/platform-browser';
import { NewCompanyComponent } from './new-company/new-company.component';
import { DetailsCompanyComponent } from './details-company/details-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';


@NgModule({
  declarations: [
    CompaniesComponent,
    ListCompaniesComponent,
    NewCompanyComponent,
    DetailsCompanyComponent,
    UpdateCompanyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    CmxWebComponentsModule.forRoot(),
  ]
})
export class CompaniesModule { }

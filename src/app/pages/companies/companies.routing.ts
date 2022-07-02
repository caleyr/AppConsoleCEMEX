import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { DetailsCompanyComponent } from './details-company/details-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';

// Components


const childUserRoutes: Routes = [
  { path: 'empresas', component: CompaniesComponent, data: { title: 'Empresas' } },
  { path: 'empresas/agregar', component: NewCompanyComponent, data: { title: 'Crear Empresa' } },
  { path: 'empresas/detalles-empresa/:id', component: DetailsCompanyComponent, data: { title: 'Detalles del Empresa' } },
  { path: 'empresas/actualizar', component: UpdateCompanyComponent, data: { title: 'Actualizar Empresa' } },
  //{ path: 'empresas/actualizar-documentos', component: UpdateDocumentsUserComponent, data: { title: 'Actualizar documentos' } },
];


@NgModule({
  imports: [ 
    RouterModule.forChild(childUserRoutes) 
  ],
  exports: [ RouterModule ]
})
export class CompaniesRoutingModule { }
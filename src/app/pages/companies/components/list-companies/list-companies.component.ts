import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../../../services/companies.service';
import { Companies } from '../../../../models/companies.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent implements OnInit {

  listComanies : Companies[] = [];

  suscripcion : Subscription;

  constructor(
    private companiesService : CompaniesService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.suscripcion = this.companiesService.refresh$.subscribe(() =>{
      this.getData();
    });
    this.getData();
  }

  getData(){
    this.companiesService.getCompanies().subscribe(data=>{
      this.listComanies = data;
    });
  }

  detailCompany( id : string) {
    this.router.navigateByUrl(`/dashboard/empresas/detalles-empresa/${id}`);
  }

}

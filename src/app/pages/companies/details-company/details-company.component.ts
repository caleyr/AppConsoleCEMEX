import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Companies } from 'src/app/models/companies.model';
import { CompaniesService } from '../../../services/companies.service';

@Component({
  selector: 'app-details-company',
  templateUrl: './details-company.component.html',
  styleUrls: ['./details-company.component.css']
})
export class DetailsCompanyComponent implements OnInit {

  id : string;
  company : Companies = new Companies();

  constructor(
    private route : ActivatedRoute,
    private companiesService : CompaniesService,
    private router : Router
    ) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.companiesService.getCompanie(this.id).subscribe(data=>{
      this.company = data;
    });
  }

  buttonBack() {
    this.router.navigateByUrl('/dashboard/empresas');
  }

}

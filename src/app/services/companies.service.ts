import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Companies } from '../models/companies.model';
import { HttpClient } from '@angular/common/http';
import { Subject, tap } from 'rxjs';
const URL = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private _refresh$ = new Subject<void>();

  constructor(
    private http: HttpClient,
  ) { }

  get refresh$(){
    return this._refresh$;
  }

  getCompanies() {
    return this.http.get<Companies[]>(`${URL}/api/companies`);
  }

  getCompanie(id : string){
    return this.http.get<Companies>(`${URL}/api/companies/${id}`);
  }

  createCompany(data : any){
    return this.http.post(`${URL}/api/companies/`, data).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  
}

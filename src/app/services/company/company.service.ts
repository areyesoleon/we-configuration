import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../../models/company.model';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { MatSnackBar } from '@angular/material';
@Injectable()
export class CompanyService {

  private url = URL_SERVICIOS + '/company';
  public totalCompany: number = 0;
  constructor(
    public http: HttpClient,
    public snackBar: MatSnackBar
  ) { }

  saveCompany(company: Company) {
    return this.http.post(this.url, company)
      .pipe(map((resp: any) => {
        this.snackBar.open('Lugar', 'Creado', {
          duration: 3000
        });
        return resp.company;
      }))
  }

  listCompany() {
    return this.http.get(this.url)
      .pipe(map((resp: any) => {
        this.totalCompany = resp.total;
        return resp.company;
      }));
  }

  loadCompany(id: string) {
    return this.http.get(this.url + '/' + id)
      .pipe(map((resp: any) => resp.company));
  }

  updateCompany(company: Company) {
    return this.http.put(this.url + '/' + company._id, company)
      .pipe(map((resp: any) => {
        this.snackBar.open('Lugar ' + company.name, 'Actualizado', {
          duration: 3000
        });
        return true;
      }))
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../../models/company.model';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { isNil } from 'lodash';
import swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material';
@Injectable()
export class CompanyService {

  constructor(
    public http: HttpClient,
    public snackBar: MatSnackBar
  ) { }

  saveCompany(company: Company) {
    console.log(company);
    const url = URL_SERVICIOS + '/company';
    if (company._id === "") {
      return this.http.post(url, company)
        .pipe(map((resp: any) => {
          this.snackBar.open('Lugar', 'Creado', {
            duration: 3000
          });
          return resp.company;
        }))
    } else {

    }
  }
}

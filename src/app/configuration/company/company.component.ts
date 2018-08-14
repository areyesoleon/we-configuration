import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/services.index';
import { Company } from '../../models/company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public company: Company = new Company('', true, '');
  public title: string;

  constructor(
    public _cs: CompanyService
  ) {
    if (true) {
      this.title = 'Nuevo lugar';
    } else {
      this.title = 'Editando lugar';
    }
  }

  ngOnInit() {
  }

  saveCompany(company: Company) {
    this._cs.saveCompany(company)
      .subscribe((company) => {
      });
  }

  clearCompany() {
    this.company.name = "";
  }

  saveMoreCompany(company: Company) {
    this._cs.saveCompany(company)
      .subscribe(() => {
        this.clearCompany();
      });
  }

}

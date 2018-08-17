import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company/company.service';
import { Company } from '../../models/company.model';
import { ActivatedRoute } from '@angular/router';
import { isNil } from 'lodash';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public company: Company = new Company('', true, '');
  public title: string;
  public isNew: boolean;
  private service: string;

  constructor(
    public _cs: CompanyService,
    public activateRoute: ActivatedRoute
  ) {
    activateRoute.params.subscribe((params) => {
      if (isNil(params['id'])) {
        this.isNew = true;
        this.title = "Nuevo lugar";
        this.service = 'saveCompany';
      } else {
        this.isNew = false;
        this.title = "Editando lugar";
        this.loadCompany(params['id']);
        this.service = 'updateCompany';
      }
    })

  }

  ngOnInit() {
  }

  saveCompany(company: Company) {
    this._cs[this.service](company)
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

  loadCompany(id: string) {
    this._cs.loadCompany(id)
      .subscribe((company: any) => {
        this.company = company
      })
  }

}

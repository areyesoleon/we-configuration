import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from '../../services/company/company.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  public tableCompany: any;
  public displayedColumns: String[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public _cs: CompanyService
  ) {
    this.listCompany();
   }

  ngOnInit() {
  }

  listCompany(){
    this._cs.listCompany().subscribe((company) => {
      this.tableCompany = new MatTableDataSource(company);
      this.tableCompany.paginator = this.paginator;
      this.tableCompany.sort = this.sort;
      this.displayedColumns = [ 'index','name', 'state'];
    });
  }

  filter(value: any){
    this.tableCompany.filter = value.trim().toLowerCase();
    if (this.tableCompany.paginator) {
      this.tableCompany.paginator.firstPage();
    }
  }

}

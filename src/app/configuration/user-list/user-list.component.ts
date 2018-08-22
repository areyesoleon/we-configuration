import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public tableUser: any;
  public displayedColumns: String[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public _us: UserService
  ) { 
    this.listaUser();
  }

  ngOnInit() {
  }

  listaUser () {
    this._us.listUser()
    .subscribe((users) => {
      this.tableUser = new MatTableDataSource(users);
      this.tableUser.paginator = this.paginator;
      this.tableUser.sort = this.sort;
      this.displayedColumns = ['index','name','state'];
    });
  }

  filter(value: any){
    this.tableUser.filter = value.trim().toLowerCase();
    if (this.tableUser.paginator) {
      this.tableUser.paginator.firstPage();
    }
  }

}

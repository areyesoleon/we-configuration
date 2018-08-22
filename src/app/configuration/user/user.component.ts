import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { isNil } from 'lodash';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: User = new User('', '', '', true, '');
  public title: string;
  public isNew: boolean;
  private service: string;
  public hide: boolean = false;

  constructor(
    public _us: UserService,
    public activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (isNil(params['id'])) {
        this.isNew = true;
        this.title = "Nuevo usuario";
        this.service = 'saveUser';
      } else {
        this.isNew = false;
        this.title = "Editando usuario";
        this.loadCompany(params['id']);
        this.service = 'updateUser';
      }
    });
  }

  ngOnInit() {
  }

  saveUser(user: User) {
    this._us[this.service](user)
      .subscribe((user) => {
      });
  }

  saveMoreUser(user: User) {
    this._us.saveUser(user)
      .subscribe(() => {
        this.cleanUser();
      });
  }

  cleanUser(){
    this.user.name = '';
    this.user.email = '';
    this.user.password = '';
  }

  loadCompany (id: string){
    this._us.loadUser(id)
    .subscribe((user) => {
      this.user = user;
    })
  }

}

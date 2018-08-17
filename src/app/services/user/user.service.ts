import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { User } from '../../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = URL_SERVICIOS + '/user';
  constructor(
    public http: HttpClient,
    public snackBar: MatSnackBar
  ) { }

  saveUser(user: User) {
    return this.http.post(this.url, user)
      .pipe(map((resp: any) => {
        this.snackBar.open('Usuario', 'Creado', {
          duration: 3000
        });
        return resp.user;
      }));
  }

  listUser() {
    return this.http.get(this.url)
      .pipe(map((resp: any) => {
        return resp.user;
      }))
  }

  loadUser(id: string) {
    this.http.get(this.url + '/' + id)
      .pipe(map((resp: any) => {
        return resp.user;
      }))
  }

  updateUser(user: User) {
    this.http.put(this.url + '/' + user._id, user)
      .pipe(map((resp: any) => {
        this.snackBar.open('Usuario' + user.name, 'Actualizado', {
          duration: 3000
        });
        return true;
      }))
  }
}
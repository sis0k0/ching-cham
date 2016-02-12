import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams, RouterLink, Router} from 'angular2/router';
import { User } from '../models/user';
import { Question } from '../models/question';
import {UserService} from '../services/user.service';

@Component({
  templateUrl: 'app/user/user.html',
  providers: [
    HTTP_PROVIDERS,
    UserService,
  ],
  directives: [RouterLink],
})

export class UserComponent {
  currentUser = localStorage.getItem('username');
  currentRole = localStorage.getItem('role');
  editUser = false;
  user: User = new User('');
  errorMessage: string;

  constructor(
    private _userService: UserService,
    private _params: RouteParams,
    private _router: Router) {
    this._userService.get(this._params.get('username'))
      .subscribe(
      user => this.user = user,
      error => this.errorMessage = <any>error);
  }

  edit() {
    this._userService.edit(this.user)
      .subscribe(
        success => this._router.navigate(['Home']),
        error => this.errorMessage = <any>error); 
  }

  delete() {
    this._userService.delete(this.user.username)
      .subscribe(
        success => {
          if(this.currentUser == this.user.username) {
            this._userService.logout()
              .subscribe(
                success => this._router.navigate(['Home']),
                error => this.errorMessage = <any>error)
          } else {
            this._router.navigate(['Home']);
          }
        },
        error => this.errorMessage = <any>error);
  }

  dateAsString(string) {
    return new Date(string);
  }
}
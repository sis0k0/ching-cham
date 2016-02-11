import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams, RouterLink} from 'angular2/router';
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
  user: User = new User('');
  errorMessage: string;

  constructor(
    private _userService: UserService,
    private _params: RouteParams) {
    this._userService.get(this._params.get('username'))
      .subscribe(
      user => this.user = user,
      error => this.errorMessage = <any>error);
  }

  dateAsString(string) {
    return new Date(string);
  }
}
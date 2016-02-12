import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import { User } from '../models/user';
import {UserService} from '../services/user.service';

@Component({
  templateUrl: 'app/administration/users.html',
  providers: [UserService],
  directives: [RouterLink],
})

export class AdminUsersComponent {
  users: User[];
  errorMessage: string;

  constructor(private _userService: UserService) {
    this._userService.getAll()
      .subscribe(
      users => this.users = users,
      error => this.errorMessage = <any>error)
  }

  dateAsString(string) {
    return new Date(string);
  }
}
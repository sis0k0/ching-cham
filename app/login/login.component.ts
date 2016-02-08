import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import { User } from '../models/user';
import {UserService} from '../services/user.service';
import {Router} from 'angular2/router';

@Component({
  templateUrl: 'app/login/login.html',
  providers: [
    HTTP_PROVIDERS,
    UserService,
  ],
})

export class LoginComponent {
  constructor(
    private _router: Router,
    private _userService: UserService) { }

  model = new User('', '');
  errorMessage: string;

  onSubmit() {
    this.errorMessage = '';
    this._userService.login(this.model)
                      .subscribe(
                        user => {
                          sessionStorage.setItem('username', user.username);
                          this._router.parent.navigate(['Home']);
                        },
                        error => this.errorMessage = <any>error);
  }

  active = true;
  reset() {
    this.model = new User('', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
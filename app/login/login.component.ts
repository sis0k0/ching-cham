import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { User }    from '../models/user';

@Component({
  templateUrl: 'app/login/login.html'
})

export class LoginComponent {
  roles = ['user', 'admin'];

  model = new User('sis0k0', 'shalqlq');

  submitted = false;
  onSubmit() { this.submitted = true; }

  active = true;
  reset() {
    this.model = new User('', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
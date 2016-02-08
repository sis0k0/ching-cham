import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {TestsComponent} from './tests/tests.component';
import {CreateTestComponent} from './create-test/create-test.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/navigation/navigation.html',
    directives: [ROUTER_DIRECTIVES],
})

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/register', name: 'Register', component: RegisterComponent },
    { path: '/tests', name: 'Tests', component: TestsComponent },
    { path: '/create-test', name: 'CreateTest', component: CreateTestComponent},
])

export class AppComponent {
  username: string;

  constructor() {
  }

  ngDoCheck() {
    this.username = sessionStorage.getItem('username');
  }
}
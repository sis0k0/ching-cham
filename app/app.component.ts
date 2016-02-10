import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {TestsComponent} from './tests/tests.component';
import {CreateTestComponent} from './create-test/create-test.component';

import {UserService} from './services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/navigation/navigation.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HTTP_PROVIDERS,
    UserService,
  ],
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
  errorMessage: string;

  constructor(
    private _router: Router,
    private _userService: UserService
    ) {
  }

  ngDoCheck() {
    this.username = sessionStorage.getItem('username');
  }

  logout() {
    this._userService.logout()
      .subscribe(
        success => {
          sessionStorage.clear();
          this._router.parent.navigate(['Home']);
        },
        error => this.errorMessage = <any>error);
  }
}
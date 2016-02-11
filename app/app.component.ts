import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {TestsComponent} from './tests/tests.component';
import {CreateTestComponent} from './create-test/create-test.component';
import {TestComponent} from './test/test.component';
import {HighscoresComponent} from './highscores/highscores.component';
import {UserComponent} from './user/user.component';

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
  { path: '/test/:name', name: 'Test', component: TestComponent },
  { path: '/create-test', name: 'CreateTest', component: CreateTestComponent },
  { path: '/scores/:testName', name: 'Highscores', component: HighscoresComponent },
  { path: '/user/:username', name: 'User', component: UserComponent},
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
    this.username = localStorage.getItem('username');
  }

  logout() {
    this._userService.logout()
      .subscribe(
        success => {
          localStorage.clear();
          this._router.parent.navigate(['Home']);
        },
        error => this.errorMessage = <any>error);
  }
}
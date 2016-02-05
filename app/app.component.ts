import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {TestsComponent} from './tests/tests.component';
import {CreateTestComponent} from './create-test/create-test.component';

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
})

@RouteConfig([
    { path: '/', name: 'Home', component: LoginComponent, useAsDefault: true },
    { path: '/login', name: 'Login', component: HomeComponent },
    { path: '/register', name: 'Register', component: RegisterComponent },
    { path: '/tests', name: 'Tests', component: TestsComponent },
    { path: '/create-test', name: 'CreateTest', component: CreateTestComponent},
])

export class AppComponent { }
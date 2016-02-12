System.register(['angular2/core', 'angular2/router', 'angular2/http', './home/home.component', './login/login.component', './register/register.component', './tests/tests.component', './create-test/create-test.component', './test/test.component', './highscores/highscores.component', './user/user.component', './administration/administration.component', './administration/admin-tests.component', './administration/admin-users.component', './services/user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, home_component_1, login_component_1, register_component_1, tests_component_1, create_test_component_1, test_component_1, highscores_component_1, user_component_1, administration_component_1, admin_tests_component_1, admin_users_component_1, user_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (tests_component_1_1) {
                tests_component_1 = tests_component_1_1;
            },
            function (create_test_component_1_1) {
                create_test_component_1 = create_test_component_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            },
            function (highscores_component_1_1) {
                highscores_component_1 = highscores_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (administration_component_1_1) {
                administration_component_1 = administration_component_1_1;
            },
            function (admin_tests_component_1_1) {
                admin_tests_component_1 = admin_tests_component_1_1;
            },
            function (admin_users_component_1_1) {
                admin_users_component_1 = admin_users_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router, _userService) {
                    this._router = _router;
                    this._userService = _userService;
                }
                AppComponent.prototype.ngDoCheck = function () {
                    this.username = localStorage.getItem('username');
                    this.role = localStorage.getItem('role');
                };
                AppComponent.prototype.logout = function () {
                    var _this = this;
                    this._userService.logout()
                        .subscribe(function (success) {
                        localStorage.clear();
                        _this._router.parent.navigate(['Home']);
                    }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/navigation/navigation.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            user_service_1.UserService,
                        ],
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/register', name: 'Register', component: register_component_1.RegisterComponent },
                        { path: '/tests', name: 'Tests', component: tests_component_1.TestsComponent },
                        { path: '/test/:name', name: 'Test', component: test_component_1.TestComponent },
                        { path: '/create-test', name: 'CreateTest', component: create_test_component_1.CreateTestComponent },
                        { path: '/scores/:testName', name: 'Highscores', component: highscores_component_1.HighscoresComponent },
                        { path: '/user/:username', name: 'User', component: user_component_1.UserComponent },
                        { path: '/administration', name: 'Admin', component: administration_component_1.AdministrationComponent },
                        { path: '/administration/tests', name: 'AdminTests', component: admin_tests_component_1.AdminTestsComponent },
                        { path: '/administration/users', name: 'AdminUsers', component: admin_users_component_1.AdminUsersComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
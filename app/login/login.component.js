System.register(['angular2/core', 'angular2/http', '../models/user', '../services/user.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, user_1, user_service_1, router_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_router, _userService) {
                    this._router = _router;
                    this._userService = _userService;
                    this.model = new user_1.User('', '');
                    this.active = true;
                }
                LoginComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.errorMessage = '';
                    this._userService.login(this.model)
                        .subscribe(function (user) {
                        localStorage.setItem('username', user.username);
                        console.log(localStorage);
                        _this._router.parent.navigate(['Home']);
                    }, function (error) { return _this.errorMessage = error; });
                };
                LoginComponent.prototype.reset = function () {
                    var _this = this;
                    this.model = new user_1.User('', '');
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/login/login.html',
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            user_service_1.UserService,
                        ],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map
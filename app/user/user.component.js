System.register(['angular2/core', 'angular2/http', 'angular2/router', '../models/user', '../services/user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, user_1, user_service_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent(_userService, _params) {
                    var _this = this;
                    this._userService = _userService;
                    this._params = _params;
                    this.user = new user_1.User('');
                    this._userService.get(this._params.get('username'))
                        .subscribe(function (user) { return _this.user = user; }, function (error) { return _this.errorMessage = error; });
                }
                UserComponent.prototype.dateAsString = function (string) {
                    return new Date(string);
                };
                UserComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/user/user.html',
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            user_service_1.UserService,
                        ],
                        directives: [router_1.RouterLink],
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_1.RouteParams])
                ], UserComponent);
                return UserComponent;
            })();
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map
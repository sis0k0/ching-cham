System.register(['angular2/core', 'angular2/router', '../services/user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_service_1;
    var AdminUsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            AdminUsersComponent = (function () {
                function AdminUsersComponent(_userService) {
                    var _this = this;
                    this._userService = _userService;
                    this._userService.getAll()
                        .subscribe(function (users) { return _this.users = users; }, function (error) { return _this.errorMessage = error; });
                }
                AdminUsersComponent.prototype.dateAsString = function (string) {
                    return new Date(string);
                };
                AdminUsersComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/administration/users.html',
                        providers: [user_service_1.UserService],
                        directives: [router_1.RouterLink],
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], AdminUsersComponent);
                return AdminUsersComponent;
            })();
            exports_1("AdminUsersComponent", AdminUsersComponent);
        }
    }
});
//# sourceMappingURL=admin-users.component.js.map
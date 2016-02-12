System.register(['angular2/core', 'angular2/router', '../services/test.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, test_service_1;
    var AdminTestsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (test_service_1_1) {
                test_service_1 = test_service_1_1;
            }],
        execute: function() {
            AdminTestsComponent = (function () {
                function AdminTestsComponent(_testService) {
                    this._testService = _testService;
                    this.load();
                }
                AdminTestsComponent.prototype.load = function () {
                    var _this = this;
                    this._testService.getAll()
                        .subscribe(function (tests) { return _this.tests = tests; }, function (error) { return _this.errorMessage = error; });
                };
                AdminTestsComponent.prototype.delete = function (name) {
                    var _this = this;
                    this._testService.delete(name)
                        .subscribe(function (success) { return _this.load(); }, function (error) { return _this.errorMessage = error; });
                };
                AdminTestsComponent.prototype.dateAsString = function (string) {
                    return new Date(string);
                };
                AdminTestsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/administration/tests.html',
                        providers: [test_service_1.TestService],
                        directives: [router_1.RouterLink],
                    }), 
                    __metadata('design:paramtypes', [test_service_1.TestService])
                ], AdminTestsComponent);
                return AdminTestsComponent;
            })();
            exports_1("AdminTestsComponent", AdminTestsComponent);
        }
    }
});
//# sourceMappingURL=admin-tests.component.js.map
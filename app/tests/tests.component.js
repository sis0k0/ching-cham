System.register(['angular2/core', 'angular2/http', '../services/test.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, test_service_1;
    var TestsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (test_service_1_1) {
                test_service_1 = test_service_1_1;
            }],
        execute: function() {
            TestsComponent = (function () {
                function TestsComponent(_testService) {
                    var _this = this;
                    this._testService = _testService;
                    this._testService.getAll()
                        .subscribe(function (tests) { return _this.tests = tests; }, function (error) { return _this.errorMessage = error; });
                }
                TestsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/tests/tests.html',
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            test_service_1.TestService,
                        ],
                    }), 
                    __metadata('design:paramtypes', [test_service_1.TestService])
                ], TestsComponent);
                return TestsComponent;
            })();
            exports_1("TestsComponent", TestsComponent);
        }
    }
});
//# sourceMappingURL=tests.component.js.map
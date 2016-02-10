System.register(['angular2/core', 'angular2/http', '../models/test', '../models/question', '../services/test.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, test_1, question_1, test_service_1, router_1;
    var CreateTestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (test_1_1) {
                test_1 = test_1_1;
            },
            function (question_1_1) {
                question_1 = question_1_1;
            },
            function (test_service_1_1) {
                test_service_1 = test_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CreateTestComponent = (function () {
                function CreateTestComponent(_router, _testService) {
                    this._router = _router;
                    this._testService = _testService;
                    this.questions = [new question_1.Question('', '')];
                    this.model = new test_1.Test('', this.questions);
                    this.active = true;
                }
                CreateTestComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.errorMessage = '';
                    this._testService.create(this.model)
                        .subscribe(function (test) { return _this._router.parent.navigate(['Tests']); }, function (error) { return _this.errorMessage = error; });
                };
                CreateTestComponent.prototype.addQuestion = function () {
                    this.questions.push(new question_1.Question('', ''));
                };
                CreateTestComponent.prototype.reset = function () {
                    var _this = this;
                    this.questions = [new question_1.Question('', '')];
                    this.model = new test_1.Test('', this.questions);
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                CreateTestComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/create-test/create-test.html',
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            test_service_1.TestService,
                        ],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, test_service_1.TestService])
                ], CreateTestComponent);
                return CreateTestComponent;
            })();
            exports_1("CreateTestComponent", CreateTestComponent);
        }
    }
});
//# sourceMappingURL=create-test.component.js.map
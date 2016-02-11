System.register(['angular2/core', 'angular2/http', 'angular2/router', '../models/test', '../models/question', '../services/test.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, test_1, question_1, test_service_1;
    var TestComponent;
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
            function (test_1_1) {
                test_1 = test_1_1;
            },
            function (question_1_1) {
                question_1 = question_1_1;
            },
            function (test_service_1_1) {
                test_service_1 = test_service_1_1;
            }],
        execute: function() {
            TestComponent = (function () {
                function TestComponent(_testService, _params) {
                    this._testService = _testService;
                    this._params = _params;
                    this.difficulties = ['Easy', 'Intermediate', 'High'];
                    this.difficulty = 'Intermediate';
                    this.givenQuestions = 0;
                    this.currentQuestion = new question_1.Question('', '');
                    this.currentAnswer = '';
                    this.started = false;
                    this.completed = false;
                    this.secondsPassed = 0;
                    this.questions = [new question_1.Question('', '')];
                    this.test = new test_1.Test(this._params.get('name'), this.questions);
                }
                TestComponent.prototype.loadTest = function () {
                    var _this = this;
                    this._testService.get(this._params.get('name'), this.difficulty)
                        .subscribe(function (test) {
                        _this.test = test;
                        _this.startTest();
                    }, function (error) { return _this.errorMessage = error; });
                };
                TestComponent.prototype.startTest = function () {
                    this.started = true;
                    this.loadNextQuestion();
                    this.startQuestionInterval();
                };
                TestComponent.prototype.startQuestionInterval = function () {
                    var _this = this;
                    this.timeForQuestionInterval = setInterval(function () { return _this.secondsPassed += 1; }, 1000);
                    this.nextQuestionInterval = setInterval(function () {
                        _this.givenQuestions == _this.test.questions.length ? _this.calculateScore() : _this.loadNextQuestion();
                    }, 10000);
                };
                TestComponent.prototype.stopQuestionInterval = function () {
                    clearInterval(this.timeForQuestionInterval);
                    clearInterval(this.nextQuestionInterval);
                };
                TestComponent.prototype.setAnswer = function () {
                    this.test.questions[this.givenQuestions - 1].givenAnswer = this.currentAnswer;
                    this.test.questions[this.givenQuestions - 1].time_for_answer += this.secondsPassed;
                    this.test.questions[this.givenQuestions - 1].time_given += 10;
                    this.givenQuestions += 1;
                    this.secondsPassed = 0;
                    this.currentAnswer = '';
                };
                TestComponent.prototype.loadNextQuestion = function () {
                    this.stopQuestionInterval();
                    if (this.givenQuestions >= this.test.questions.length) {
                        this.setAnswer();
                        this.calculateScore();
                    }
                    else if (this.givenQuestions > 0) {
                        this.currentQuestion = this.test.questions[this.givenQuestions];
                        this.setAnswer();
                        this.startQuestionInterval();
                    }
                    else {
                        this.currentQuestion = this.test.questions[this.givenQuestions];
                        this.givenQuestions += 1;
                    }
                };
                TestComponent.prototype.calculateScore = function () {
                    this.completed = true;
                    this.stopQuestionInterval();
                };
                TestComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/test/test.html',
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            test_service_1.TestService,
                        ],
                    }), 
                    __metadata('design:paramtypes', [test_service_1.TestService, router_1.RouteParams])
                ], TestComponent);
                return TestComponent;
            })();
            exports_1("TestComponent", TestComponent);
        }
    }
});
//# sourceMappingURL=test.component.js.map
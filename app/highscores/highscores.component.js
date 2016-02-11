System.register(['angular2/core', 'angular2/http', 'angular2/router', '../services/score.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, score_service_1;
    var HighscoresComponent;
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
            function (score_service_1_1) {
                score_service_1 = score_service_1_1;
            }],
        execute: function() {
            HighscoresComponent = (function () {
                function HighscoresComponent(_scoreService, _params) {
                    var _this = this;
                    this._scoreService = _scoreService;
                    this._params = _params;
                    this.scores = [];
                    this.testName = this._params.get('testName');
                    this.current_user = localStorage.getItem('username');
                    this._scoreService.get(this.testName)
                        .subscribe(function (scores) { return _this.scores = scores; }, function (error) { return _this.errorMessage = error; });
                }
                HighscoresComponent.prototype.dateAsString = function (string) {
                    return new Date(string);
                };
                HighscoresComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/highscores/highscores.html',
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            score_service_1.ScoreService,
                        ],
                        directives: [router_1.RouterLink],
                    }), 
                    __metadata('design:paramtypes', [score_service_1.ScoreService, router_1.RouteParams])
                ], HighscoresComponent);
                return HighscoresComponent;
            })();
            exports_1("HighscoresComponent", HighscoresComponent);
        }
    }
});
//# sourceMappingURL=highscores.component.js.map
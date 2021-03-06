System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var ScoreService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            ScoreService = (function () {
                function ScoreService(http) {
                    this.http = http;
                    this._scoreUrl = '/api/score';
                }
                ScoreService.prototype.create = function (test) {
                    var username = localStorage.getItem('username');
                    test.filled_by = username;
                    var body = JSON.stringify({ test: test });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._scoreUrl, body, options)
                        .map(function (res) { return res.json().points; })
                        .catch(this.handleError);
                };
                ScoreService.prototype.get = function (testName) {
                    return this.http.get(this._scoreUrl + '/' + testName)
                        .map(function (res) { return res.json().scores; })
                        .catch(this.handleError);
                };
                ScoreService.prototype.handleError = function (error) {
                    return Observable_1.Observable.throw(error._body || 'Server error');
                };
                ScoreService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ScoreService);
                return ScoreService;
            })();
            exports_1("ScoreService", ScoreService);
        }
    }
});
//# sourceMappingURL=score.service.js.map
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
    var TestService;
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
            TestService = (function () {
                function TestService(http) {
                    this.http = http;
                    this._testUrl = '/api/test';
                    this._allTestsUrl = '/api/tests';
                    this._scoreUrl = '/api/test/calculate';
                }
                TestService.prototype.create = function (test) {
                    var body = JSON.stringify({ test: test });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._testUrl, body, options)
                        .map(function (res) { return res.json().test; })
                        .catch(this.handleError);
                };
                TestService.prototype.getAll = function () {
                    return this.http.get(this._allTestsUrl)
                        .map(function (res) { return res.json().tests; })
                        .catch(this.handleError);
                };
                TestService.prototype.get = function (name, difficulty) {
                    return this.http.get(this._testUrl + '/' + name + '/' + difficulty)
                        .map(function (res) { return res.json().test; })
                        .catch(this.handleError);
                };
                TestService.prototype.delete = function (name) {
                    return this.http.delete(this._testUrl + '/' + name)
                        .map(function (res) { return res.status.toString(); })
                        .catch(this.handleError);
                };
                TestService.prototype.handleError = function (error) {
                    return Observable_1.Observable.throw(error._body || 'Server error');
                };
                TestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TestService);
                return TestService;
            })();
            exports_1("TestService", TestService);
        }
    }
});
//# sourceMappingURL=test.service.js.map
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
    var UserService;
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
            UserService = (function () {
                function UserService(http) {
                    this.http = http;
                    this._loginUrl = '/api/login';
                    this._registerUrl = '/api/register';
                    this._logoutUrl = '/api/logout';
                    this._userUrl = '/api/user';
                    this._usersUrl = '/api/users';
                }
                UserService.prototype.login = function (user) {
                    var body = JSON.stringify({ user: user });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._loginUrl, body, options)
                        .map(function (res) { return res.json().user; })
                        .catch(this.handleError);
                };
                UserService.prototype.register = function (user) {
                    var body = JSON.stringify({ user: user });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._registerUrl, body, options)
                        .map(function (res) { return res.json().user; })
                        .catch(this.handleError);
                };
                UserService.prototype.logout = function () {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._logoutUrl, '', options)
                        .map(function (res) { return res.status.toString(); })
                        .catch(this.handleError);
                };
                UserService.prototype.get = function (username) {
                    return this.http.get(this._userUrl + '/' + username)
                        .map(function (res) { return res.json().user; })
                        .catch(this.handleError);
                };
                UserService.prototype.getAll = function () {
                    return this.http.get(this._usersUrl)
                        .map(function (res) { return res.json().users; })
                        .catch(this.handleError);
                };
                UserService.prototype.edit = function (user) {
                    var body = JSON.stringify({ user: user });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(this._userUrl + '/' + user.username, body, options)
                        .map(function (res) { return res.status.toString(); })
                        .catch(this.handleError);
                };
                UserService.prototype.delete = function (username) {
                    return this.http.delete(this._userUrl + '/' + username)
                        .map(function (res) { return res.status.toString(); })
                        .catch(this.handleError);
                };
                UserService.prototype.handleError = function (error) {
                    return Observable_1.Observable.throw(error._body || 'Server error');
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            })();
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map
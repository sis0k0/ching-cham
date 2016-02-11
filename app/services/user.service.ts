import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor (private http: Http) {}

  private _loginUrl = '/api/login';
  private _registerUrl = '/api/register';
  private _logoutUrl = '/api/logout';
  private _userUrl = '/api/user';

  login (user: any) : Observable<User>  {
    let body = JSON.stringify({ user });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._loginUrl, body, options)
                    .map(res => <User> res.json().user)
                    .catch(this.handleError)
  }

  register (user: any) : Observable<User> {
    let body = JSON.stringify({ user });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._registerUrl, body, options)
                    .map(res=> <User> res.json().user)
                    .catch(this.handleError)
  }

  logout (): Observable<string> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._logoutUrl, '', options)
                    .map(res => res.status.toString())
                    .catch(this.handleError)
  }

  get (username: string) : Observable<User> {
    return this.http.get(this._userUrl + '/' + username)
                    .map(res => res.json().user)
                    .catch(this.handleError);
  }

  edit(user: User): Observable<string> {
    let body = JSON.stringify({ user });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this._userUrl + '/' + user.username, body, options)
                    .map(res => res.status.toString())
                    .catch(this.handleError);
  }

  private handleError (error: Response) {
    return Observable.throw(error._body || 'Server error');
  }
}
import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor (private http: Http) {}

  private _loginUrl = '/api/login';

  login (user: any) : Observable<User>  {

    let body = JSON.stringify({ user });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._loginUrl, body, options)
                    .map(res => <User> res.json().user)
                    .catch(this.handleError)
  }

  private handleError (error: Response) {
    return Observable.throw(error._body || 'Server error');
  }
}
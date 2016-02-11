import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Score} from '../models/score';
import {Test} from '../models/test';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ScoreService {
  constructor (private http: Http) {}

  private _scoreUrl = '/api/score';

  create (test: Test) : Observable<number> {
	  let username = localStorage.getItem('username');
	  test.filled_by = username;

    let body = JSON.stringify({ test });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._scoreUrl, body, options)
										.map(res => <number>res.json().points)
                    .catch(this.handleError);
  }

  get (testName: string) : Observable<Array<Score>> {
    return this.http.get(this._scoreUrl + '/' + testName)
                    .map(res => <Array<Score>>res.json().scores)
                    .catch(this.handleError);
  }

  private handleError (error: Response) {
    return Observable.throw(error._body || 'Server error');
  }
}
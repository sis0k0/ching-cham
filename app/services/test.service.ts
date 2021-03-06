import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Test} from '../models/test';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TestService {
  constructor (private http: Http) {}

  private _testUrl = '/api/test';
  private _allTestsUrl = '/api/tests';
  private _scoreUrl = '/api/test/calculate';

  create (test: any) : Observable<Test> {
    let body = JSON.stringify({ test });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._testUrl, body, options)
                    .map(res => <Test>res.json().test)
                    .catch(this.handleError);
  }

  getAll () : Observable<Array<Test>> {
    return this.http.get(this._allTestsUrl)
                    .map(res => <Array<Test>>res.json().tests)
                    .catch(this.handleError);
  }

  get (name: string, difficulty: string) : Observable<Test> {
    return this.http.get(this._testUrl + '/' + name + '/' + difficulty)
                    .map(res => <Test>res.json().test)
                    .catch(this.handleError);
  }

  delete (name: string) : Observable<string> {
    return this.http.delete(this._testUrl + '/' + name)
                    .map(res => res.status.toString())
                    .catch(this.handleError);
  }

  private handleError (error: Response) {
    return Observable.throw(error._body || 'Server error');
  }
}
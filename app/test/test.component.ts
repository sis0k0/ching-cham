import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams} from 'angular2/router';
import { Test } from '../models/test';
import { Question } from '../models/question';
import {TestService} from '../services/test.service';

@Component({
  templateUrl: 'app/test/test.html',
  providers: [
    HTTP_PROVIDERS,
    TestService,
  ],
})

export class TestComponent {
  questions: Question[] = [new Question('', '')];
  test = new Test('', this.questions);
  errorMessage: string;
  // _params: RouteParams;

  constructor(private _testService: TestService, private _params: RouteParams) {
    // console.log(params);
    // this._testService.get(params.get('name'))
    //     .subscribe(
    //     test => {
    //       this.test = test;
    //       console.log(this.test);  
    //     },
    //     error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    this._testService.get(this._params.get('name'))
      .subscribe(
      test => {
        this.test = test;
        console.log(this.test);
      },
      error => this.errorMessage = <any>error);

  }

}
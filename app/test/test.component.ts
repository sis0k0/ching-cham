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
  difficulty:string = 'Intermediate';
  errorMessage: string;
  questions: Question[] = [new Question('', '')];
  test:Test = new Test('', this.questions);

  constructor(
    private _testService: TestService,
    private _params: RouteParams
   ) { }
  
  loadTest() {
    this._testService.get(this._params.get('name'), this.difficulty)
      .subscribe(
      test => {
        this.test = test;
        console.log(this.test);
      },
      error => this.errorMessage = <any>error);

  }

}
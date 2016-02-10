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
  difficulties = ['Easy', 'Intermediate', 'High'];
  difficulty: string = 'Intermediate';
  errorMessage: string;

  constructor(
    private _testService: TestService,
    private _params: RouteParams
   ) { }
  
  questions: Question[] = [new Question('', '')];
  test:Test = new Test(this._params.get('name'), this.questions);

  loadTest() {
    this._testService.get(this._params.get('name'), this.difficulty)
      .subscribe(
      test => this.test = test,
      error => this.errorMessage = <any>error);
  }
}
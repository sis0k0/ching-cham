import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import { Test } from '../models/test';
import { Question } from '../models/question';
import {TestService} from '../services/test.service';
import {Router} from 'angular2/router';

@Component({
  templateUrl: 'app/create-test/create-test.html',
  providers: [
    HTTP_PROVIDERS,
    TestService,
  ],
})

export class CreateTestComponent {
  constructor(
    private _router: Router,
    private _testService: TestService) { }

  questions: Question[] = [new Question('', '')];
  model = new Test('', this.questions);
  errorMessage: string;

  onSubmit() {
    this.errorMessage = '';
    this._testService.create(this.model)
    .subscribe(
      test => this._router.parent.navigate(['Tests']),
      error => this.errorMessage = <any>error);
  }

  addQuestion() {
    this.questions.push(new Question('', ''));
  }

  active = true;
  reset() {
    this.questions = [new Question('', '')];
    this.model = new Test('', this.questions);
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
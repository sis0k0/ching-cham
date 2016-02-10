import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import { Test } from '../models/test';
import { Question } from '../models/question';
import {TestService} from '../services/test.service';

@Component({
  templateUrl: 'app/tests/tests.html',
  providers: [
    HTTP_PROVIDERS,
    TestService,
  ],
})


export class TestsComponent {
  tests: Test[];
  errorMessage: string;

  constructor(private _testService: TestService) {
    this._testService.getAll()
      .subscribe(
      tests => this.tests = tests,
      error => this.errorMessage = <any>error);
  }
}
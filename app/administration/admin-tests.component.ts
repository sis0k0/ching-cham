import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import { Test } from '../models/test';
import {TestService} from '../services/test.service';

@Component({
  templateUrl: 'app/administration/tests.html',
  providers: [TestService],
  directives: [RouterLink],
})

export class AdminTestsComponent {
  tests: Test[];
  errorMessage: string;

  constructor(private _testService: TestService) {
    this.load();
  }

  load() {
    this._testService.getAll()
      .subscribe(
      tests => this.tests = tests,
      error => this.errorMessage = <any>error);
  }

  delete(name: string) {
    this._testService.delete(name)
      .subscribe(
      success => this.load(),
      error => this.errorMessage = error);
  }

  dateAsString(string) {
    return new Date(string);
  }
}
import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
  templateUrl: 'app/administration/tests.html',
  directives: [RouterLink],
})

export class AdminTestsComponent {
  constructor() { }
}
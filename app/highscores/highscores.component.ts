import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouterLink, RouteParams} from 'angular2/router';
import { Score } from '../models/score';
import {ScoreService} from '../services/score.service';

@Component({
  templateUrl: 'app/highscores/highscores.html',
  providers: [
    HTTP_PROVIDERS,
    ScoreService,
  ],
  directives: [RouterLink],
})

export class HighscoresComponent {
  scores: Score[] = [];
  errorMessage: string;
  testName: string = this._params.get('testName');
  current_user: string = localStorage.getItem('username');

  constructor(
    private _scoreService: ScoreService,
    private _params: RouteParams) {
    this._scoreService.get(this.testName)
      .subscribe(
        scores =>  this.scores = scores,
        error => this.errorMessage = <any>error);
  }

  dateAsString(string) {
    return new Date(string);
  }
}
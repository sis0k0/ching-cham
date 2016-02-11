import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams, RouterLink} from 'angular2/router';
import { Test } from '../models/test';
import { Score } from '../models/score';
import { Question } from '../models/question';
import {TestService} from '../services/test.service';
import {ScoreService} from '../services/score.service';

@Component({
  templateUrl: 'app/test/test.html',
  providers: [
    HTTP_PROVIDERS,
    TestService,
    ScoreService,
  ],
  directives: [RouterLink],
})

export class TestComponent {
  difficulties = ['Easy', 'Intermediate', 'High'];
  difficulty: string = 'Intermediate';
  errorMessage: string;

  givenQuestions: number = 0;
  currentQuestion: Question = new Question('', '');
  currentAnswer: string = '';
  nextQuestionInterval;
  timeForQuestionInterval;
  started = false;
  completed = false;
  secondsPassed = 0;


  constructor(
    private _testService: TestService,
    private _scoreService: ScoreService,
    private _params: RouteParams
   ) { }
  
  questions: Question[] = [new Question('', '')];
  test:Test = new Test(this._params.get('name'), this.questions);
  points = 0

  loadTest() {
    this._testService.get(this._params.get('name'), this.difficulty)
      .subscribe(
      test => {
        this.test = test;
        this.startTest();
      },
      error => this.errorMessage = <any>error);
  }

  startTest() {
    this.started = true;
    this.loadNextQuestion();
    this.startQuestionInterval();
  }

  startQuestionInterval() {
    this.timeForQuestionInterval = setInterval(() => this.secondsPassed += 1, 1000);
    this.nextQuestionInterval = setInterval(() => {
      this.givenQuestions == this.test.questions.length ? this.calculateScore() : this.loadNextQuestion();
    }, 10000);

  }

  stopQuestionInterval() {
    clearInterval(this.timeForQuestionInterval);
    clearInterval(this.nextQuestionInterval);
  }

  setAnswer() {
    this.test.questions[this.givenQuestions - 1].givenAnswer = this.currentAnswer;
    this.test.questions[this.givenQuestions - 1].timeForAnswerUser = this.secondsPassed;
    this.test.questions[this.givenQuestions - 1].timeGivenUser = 10;    
    
    this.givenQuestions += 1;
    this.secondsPassed = 0;
    this.currentAnswer = '';
  }

  loadNextQuestion() {
    this.stopQuestionInterval();
    if(this.givenQuestions >= this.test.questions.length) {
      this.setAnswer();
      this.calculateScore();
    } else if(this.givenQuestions > 0) {
      this.currentQuestion = this.test.questions[this.givenQuestions];
      this.setAnswer();
      this.startQuestionInterval();
    } else {
      this.currentQuestion = this.test.questions[this.givenQuestions];
      this.givenQuestions += 1;
    }
  }

  calculateScore() {
    this.completed = true;
    this.stopQuestionInterval();
    this._scoreService.create(this.test)
        .subscribe(
          points => this.points = points,
          error => this.errorMessage = <any>error
        );
  }
}
export class Question {
  constructor(
    public question: string,
    public answer: string,
    public givenAnswer?: string,
    public timeGivenUser?: number,
    public timeForAnswerUser?: number
  ) { }
}
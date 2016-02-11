export class Question {
  constructor(
    public question: string,
    public answer: string,
    public givenAnswer?: string,
    public time_given?: number,
    public time_for_answer?: number
  ) { }
}
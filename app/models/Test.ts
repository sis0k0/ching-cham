import {Question} from './question';

export class Test {

  constructor(
    public name: string,
    public questions: Array<Question>
  ) { }
}
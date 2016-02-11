import {Question} from './question';
import {User} from './user';

export class Test {

  constructor(
    public name: string,
    public questions: Array<Question>,
    public filled_by?: User
  ) { }
}
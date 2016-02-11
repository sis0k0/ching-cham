import {User} from './user';
import {Test} from './test';

export class Score {

  constructor(
    public points: number,
	public test: Test,
	public user?: User
  ) { }
}
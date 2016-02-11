import {Score} from './score';

export class User {
  constructor(
    public username: string,
    public password?: string,
    public email?: string,
    public role?: string,
    public scores?: Array<Score>
  ) { }
}
import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouterLink} from 'angular2/router';

@Component({
  templateUrl: 'app/navigation/navigation.html',
  directives: [RouterLink],
  providers: [
    HTTP_PROVIDERS,
  ],
})

export class NavigationComponent {
  username: string;
  constructor() {
    this.username = sessionStorage.getItem('username');
    // if(this.username === null) {
      
    // }
  }


}
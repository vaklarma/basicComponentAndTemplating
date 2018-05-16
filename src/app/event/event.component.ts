///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],

})

export class EventComponent {
  title = 'Sziasztok!';

  constructor() {

    console.log(`${this.title} összefűzve konstruktorban`);
    this.greetings();
  }

  greetings() {
    console.log('not implemented yet');
  }
}

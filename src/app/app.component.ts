import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'makkmarcika';
  events = ['esemény_01', ' esemény_02 ', 'esemény_03'];
  show = true;
  klikkeljunke = false;
  inputContent: string;

  pipeDemo = [
    {
      'id': 1,
      'name': 'puffancs'
    },
    {
      'id': 2,
      'name': 'Toj'
    },
    {
      'id': 3,
      'name': 'harmadik'
    }
  ];


  toogle () {
    this.show = !this.show;
    this.inputContent = 'hehe,eret,asdasd'
  }

  demo (ev: Event) {

    console.log(ev);

  }
}

import {Component} from '@angular/core';
 import {EventModel} from './event-model';

@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent  {
events: EventModel[];
valamiXss: string;


  constructor() {

    this.valamiXss = 'alert("sssssss")';

this.events = [
  {
    id: 1,
    name: 'sziget',
    pic: 'http://budnews.hu/container/news/budapest-event-sziget-boscolo-hotel_1517306064.jpg'
  },
  {
    id: 2,
    name: 'fezen',
    pic: 'https://e-jegyiroda.hu/img/fezen-2017-jegyek-berletek.jpg'
  },
  {
    id: 3,
    name: 'rockmaraton',
    pic: 'http://hammerworld.hu/images/upload/01arokka17.jpg'
  }
];
    console.log('halliho listdemo komponens');

  const puf =this.events.reduce((x: EventModel,y: EventModel) => {
    return  x.id > y.id ? x : y;
    //(logikai vizsgálat) ? haigaz : hahamis

    // if (x.id > y.id) {
    //   return x;
    // } else {
    //   return y;
    // }
  }).id;
console.log(puf);

  }
add(newEventNameInput: HTMLInputElement, newEventPicInput: HTMLInputElement) {
    console.log(newEventNameInput.value);
  console.log(newEventPicInput.value);


     // this.events = [...this.events, {
  //
  //   id: 0,
  //   name: newEventNameInput.value,
  //   pic: 'linkakephez '
  // }];
const maxId = this.events.reduce((x,y) => x.id > y.id ? x : y).id;
  this.events = [...this.events, new EventModel(maxId + 1, newEventNameInput.value , newEventPicInput.value)];


  newEventNameInput.value = '';
  newEventPicInput.value = '';
}
delete (id: number) {
    this.events = this.events.filter( (ev: EventModel) => ev.id !== id);
}
xss(xssattack: HTMLInputElement){

    console.log(xssattack.value);

}
}

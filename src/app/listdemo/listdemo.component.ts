import { Component, OnInit } from '@angular/core';
export class EventModel {
  id: number;
  name: string;
}



@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent implements OnInit {
events: EventModel[];
  constructor() {
this.events = [
  {
    id: 1,
    name: 'sziget'
  },
  {
    id: 2,
    name: 'fezen'
  },
  {
    id: 3,
    name: 'rockmaraton'
  }
]
    console.log('halliho listdemo komponens');
  }
add(newEventNameInput) {
    console.log(newEventNameInput);


}
delete (id: number) {
    this.events = this.events.filter( (ev: EventModel) => ev.id !== id);
}

}

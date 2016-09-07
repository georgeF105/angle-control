import { Component } from '@angular/core';

import '../../public/css/styles.css';
import { Plug } from './plug';
import { PlugCardComponent } from './plug-card.component';

const PLUGS: Plug[] = [
  { id: 1, description: 'Down Lights', on: false},
  { id: 2, description: 'Fan', on: false},
  { id: 3, description: 'Kitchen Speakers', on: false}
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  message = 'Hello World';
  plugs = PLUGS;
  selectedPlug: Plug;

  onSelect(plug: Plug): void {
    this.selectedPlug = plug;
  }
}

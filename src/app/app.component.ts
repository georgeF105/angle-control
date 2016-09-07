import { Component } from '@angular/core';
import '../../public/css/styles.css';

export class Plug {
  id: number;
  description: string;
}

const PLUGS: Plug[] = [
  { id: 1, description: 'Down Lights'},
  { id: 2, description: 'Fan'},
  { id: 3, description: 'Kitchen Speakers'}
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

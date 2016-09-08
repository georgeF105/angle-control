import { Component, Input } from '@angular/core'

import { Plug } from './plug';

@Component({
  selector: 'plug-card',
  templateUrl: './plug-card.component.html',
  styleUrls: ['./plug-card.component.css']
})

export class PlugCardComponent {
  @Input()
  plug: Plug;
  isOn = false;
  togglePlug() {
    this.isOn = !this.isOn;
  }
}
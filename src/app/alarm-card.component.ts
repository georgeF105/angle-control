import { Component, Input } from '@angular/core'

import { Alarm } from './alarm';

@Component({
  selector: 'alarm-card',
  templateUrl: './alarm-card.component.html',
  styleUrls: ['./alarm-card.component.css']
})

export class AlarmCardComponent {
  @Input()
  alarm: Alarm;
  isOn = false;
  toggleAlarm() {
    this.alarm.toggle();
  }
  toggleDay(day:string) {
    this.alarm.toggleDay(day);
  }
}
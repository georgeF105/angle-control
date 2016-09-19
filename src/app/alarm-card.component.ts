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
  toggleAlarm() {
    this.alarm.toggle();
  }
  toggleDay(day:string) {
    this.alarm.toggleDay(day);
  }
  updateTime(event:any) {
    const time = event.target.value;
    this.alarm.updateTime(time);
  }
  deleteAlarm() {
    this.alarm.delete();
  }
}
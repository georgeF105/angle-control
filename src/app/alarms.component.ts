import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import '../../public/css/styles.css';
import { Alarm } from './alarm';
import { AlarmService } from './alarm.service';

@Component({
  selector: 'my-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css'],
  providers: [AlarmService]
})

export class AlarmsComponent implements OnInit {
  alarms: Alarm[];
  selectedAlarm: Alarm;
  public subscription: Subscription; // Subscription<Alarm[]>; <- error TS2315: Type 'Subscription' is not generic

  constructor(private alarmService: AlarmService) { }

  ngOnInit(): void {
    this.subscription = this.alarmService.getAlarms().subscribe(alarms => {
      this.alarms = alarms
    })
  }

  onSelect(alarm: Alarm): void {
    this.selectedAlarm = alarm;
  }

  addAlarm(): void {
    this.alarmService.addAlarm();
  }
}

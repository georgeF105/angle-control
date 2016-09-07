import { Component, OnInit } from '@angular/core';

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

  constructor(private alarmService: AlarmService) { }

  getAlarms(): void {
    this.alarmService.getAlarms()
      .then(alarms => this.alarms = alarms);
  }

  ngOnInit(): void {
    this.getAlarms();
  }

  onSelect(alarm: Alarm): void {
    this.selectedAlarm = alarm;
  }
}

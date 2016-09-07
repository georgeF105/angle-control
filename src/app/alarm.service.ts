import { Injectable } from '@angular/core'

import { Alarm } from './alarm';
import { ALARMS } from './mock-alarms';

@Injectable()

export class AlarmService {
  getAlarms(): Promise<Alarm[]> {
    return Promise.resolve(ALARMS);
  }
}
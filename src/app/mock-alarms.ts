import { Alarm } from './alarm';

export const ALARMS: Alarm[] = [
  {
    id: 1, 
    time: Date.now(),
    alarmType: 'sunrise',
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    on: true
  },
  {
    id: 2, 
    time: 100,
    alarmType: 'sunrise',
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    on: true
  }
];
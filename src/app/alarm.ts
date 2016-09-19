export class Alarm {
  id: number;
  time: number;
  alarmType: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  on: boolean;
  toggle() {};
  toggleDay(day:string) {};
  updateTime(time:string) {};
}
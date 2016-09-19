import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { firebase } from '../firebaseConfig'
import convertObjToArr from '../lib/convertObjToArr'
import { Alarm } from './alarm';

@Injectable()

export class AlarmService {
  getAlarms(): Observable<Alarm[]> {
    return Observable.create(observer => {
      firebase.database().ref('alarms').on('value', snapshot => {
        let data = convertObjToArr(snapshot.val());
        data = data.map(alarm => {
          alarm.toggle = () => {
            let updates = {};
            updates['alarms/' + alarm.id + '/on'] = !alarm.on;
            firebase.database().ref().update(updates);
          }
          alarm.toggleDay = (day:string) => {
            let updates = {};
            updates['alarms/' + alarm.id + '/' + day] = !alarm[day];
            firebase.database().ref().update(updates);
          }
          alarm.updateTime = (time:string) => {
            let updates = {};
            updates['alarms/' + alarm.id + '/time'] = time;
            firebase.database().ref().update(updates);
          }
          return alarm;
        })
        observer.next(data);
      });
    });
  }

  addAlarm(): void {
    const alarm = {time: "00:00"};
    const key = firebase.database().ref('alarms').push().key;
    let updates = {};
    updates['alarms/' + key] = alarm;
    firebase.database().ref().update(updates);
  }
}
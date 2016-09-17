import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { firebase } from '../firebaseConfig'
import convertObjToArr from '../lib/convertObjToArr'
import { Alarm } from './alarm';
import { ALARMS } from './mock-alarms';

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
          return alarm;
        })
        data = data.map(alarm => {
          alarm.toggleDay = (day:string) => {
            let updates = {};
            updates['alarms/' + alarm.id + '/' + day] = !alarm[day];
            firebase.database().ref().update(updates);
          }
          return alarm;
        })
        observer.next(data);
      });
    });
  }
}
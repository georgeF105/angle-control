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
        data = data.map(plug => {
          plug.toggle = () => {
            let updates = {};
            updates['alarms/' + plug.id + '/on'] = !plug.on;
            firebase.database().ref().update(updates);
          }
          return plug;
        })
        observer.next(data);
      });
    });
  }
}
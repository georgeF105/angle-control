import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { firebase } from '../firebaseConfig'
import convertObjToArr from '../lib/convertObjToArr'
import { Plug } from './plug';

@Injectable()

export class PlugService {
  getPlugs(): Observable<Plug[]> {
    return Observable.create((observer:any) => {
      firebase.database().ref('plugs').on('value', snapshot => {
        let data = convertObjToArr(snapshot.val());
        data = data.map((plug:Plug) => {
          plug.toggle = () => {
            let updates = {};
            updates['plugs/' + plug.id + '/on'] = !plug.on;
            firebase.database().ref().update(updates);
          }
          return plug;
        })
        observer.next(data);
      });
    });
  }
}
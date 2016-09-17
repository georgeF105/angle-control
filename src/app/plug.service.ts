import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { firebase } from '../firebaseConfig'
import convertObjToArr from '../lib/convertObjToArr'
import { Plug } from './plug';

@Injectable()

export class PlugService {
  db: any;
  plugs: Plug[];
  constructor() {
    this.db = firebase;
  }
  getPlugs(): Observable<Plug[]> {
    return Observable.create(observer => {
      this.db.database().ref('plugs').on('value', snapshot => {
        let data = convertObjToArr(snapshot.val());
        data = data.map(plug => {
          plug.toggle = () => {
            let updates = {};
            updates['plugs/' + plug.id + '/on'] = !plug.on;
            this.db.database().ref().update(updates);
          }
          return plug;
        })
        this.plugs = data;
        observer.next(this.plugs);
      });
    });
  }
}
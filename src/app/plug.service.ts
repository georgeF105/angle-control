import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import * as Firebase from 'firebase';

import { firebaseConfig } from '../firebaseConfig'
import convertObjToArr from '../lib/convertObjToArr'
import { Plug } from './plug';

@Injectable()

export class PlugService {
  db: any;
  plugs: Plug[];
  constructor() {
    this.db = Firebase.initializeApp(firebaseConfig)
  }
  getPlugs(): Observable<Plug[]> {
    return Observable.create(observer => {
      this.db.database().ref('plugs').on('value', snapshot => {
        let data = convertObjToArr(snapshot.val());
        this.plugs = data;
        observer.next(this.plugs);
      });
    });
  }
}
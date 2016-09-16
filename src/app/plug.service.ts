import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import * as Firebase from 'firebase';

import { firebaseConfig } from '../firebaseConfig'

import { Plug } from './plug';
import { PLUGS } from './mock-plugs';

@Injectable()

export class PlugService {
  db: any;
  plugs: Plug[] = PLUGS;
  constructor() {
    this.db = Firebase.initializeApp(firebaseConfig)
  }
  getPlugs(): Observable<Plug[]> {
    return Observable.create(observer => {
      this.db.database().ref('plugs').on('value', snapshot => {
        let data = snapshot.val();
        this.plugs = data;
        observer.next(this.plugs);
      });
    });
  }
}
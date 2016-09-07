import { Injectable } from '@angular/core'

import { Plug } from './plug';
import { PLUGS } from './mock-plugs'

@Injectable()

export class PlugService {
  getPlugs(): Plug[] {
    return PLUGS;
  }
}
import { Component, OnInit } from '@angular/core';

import '../../public/css/styles.css';
import { Plug } from './plug';
import { PlugService } from './plug.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'my-plugs',
  templateUrl: './plugs.component.html',
  styleUrls: ['./plugs.component.css'],
  providers: [PlugService]
})

export class PlugsComponent implements OnInit {
  plugs: Plug[];
  selectedPlug: Plug;
  public subscription: Subscription<Plug[]>;

  constructor(private plugService: PlugService) { }

  ngOnInit(): void {
    this.subscription = this.plugService.getPlugs().subscribe(plugs => {
      this.plugs = plugs
      console.log('plugs in component', this.plugs)
    })
  }

  onSelect(plug: Plug): void {
    this.selectedPlug = plug;
  }
}

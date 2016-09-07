import { Component, OnInit } from '@angular/core';

import '../../public/css/styles.css';
import { Plug } from './plug';
import { PlugService } from './plug.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlugService]
})

export class AppComponent implements OnInit {
  message = 'Hello World';
  plugs: Plug[];
  selectedPlug: Plug;

  constructor(private plugService: PlugService) { }

  getPlugs(): void {
    this.plugService.getPlugs()
      .then(plugs => this.plugs = plugs);
  }

  ngOnInit(): void {
    this.getPlugs();
  }

  onSelect(plug: Plug): void {
    this.selectedPlug = plug;
  }
}

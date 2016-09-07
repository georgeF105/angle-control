import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlugsComponent } from './plugs.component';
import { PlugCardComponent } from './plug-card.component';
import { PlugService } from './plug.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PlugsComponent,
    PlugCardComponent
  ],
  providers: [
    PlugService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

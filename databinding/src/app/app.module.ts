import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationModule } from './interpolation/interpolation.module';
import { PropertybindingModule } from './propertybinding/propertybinding.module';
import { EventbindingModule } from './eventsbinding/eventbinding.module';
import { EventemitterModule } from './eventemitter/eventemitter.module';
import { DynamicstylesModule } from './dynamicstyles/dynamicstyles.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InterpolationModule,
    PropertybindingModule,
    EventbindingModule,
    EventemitterModule,
    DynamicstylesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

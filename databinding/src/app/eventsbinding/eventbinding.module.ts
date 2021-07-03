import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomEventBindingComponent } from './dom-event-binding.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DomEventBindingComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [
    DomEventBindingComponent
  ]
})
export class EventbindingModule { }

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  //create Custom Event :onSend -name of the custom event
  @Output() //
  onSend = new EventEmitter<string>();
  todo: string = ""

  constructor() { }

  send() {
    this.onSend.emit(this.todo)
    this.todo=""
  }

  ngOnInit(): void {
  }

}

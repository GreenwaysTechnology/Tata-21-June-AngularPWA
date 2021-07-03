import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-event-binding',
  templateUrl: './dom-event-binding.component.html',
  styles: [
  ]
})
export class DomEventBindingComponent implements OnInit {

  inputMessage: string = "..."

  messageOne:string="....";

  messageTwo:string="....";

  messageThree:string="....";

  constructor() { }

  onClick() {
    alert('Button was clicked')
  }
  onRead(evt: any) {
    //  console.log(evt.target.value)
    this.inputMessage = evt.target.value
  }
  ngOnInit(): void {
  }

}

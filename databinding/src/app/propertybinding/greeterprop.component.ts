import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-greeterprop',
  templateUrl: './greeterprop.component.html',
  styles: [
  ]
})
export class GreeterpropComponent implements OnInit {

  //place holder variable; used to read value which was sent by parent component

  @Input()
  message:string=""
  @Input("name")
  myname:string=""

  constructor() { }

  ngOnInit(): void {
  }

}

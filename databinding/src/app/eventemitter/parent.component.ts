import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  childMessage: string = "..."
  list: Array<string> = ['learn angular'];

  read(data: string) {
    this.childMessage = data;
    this.list.push(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributedirective',
  templateUrl: './attributedirective.component.html',
  styles: [
  ]
})
export class AttributedirectiveComponent implements OnInit {
  color:string = 'blue'
  constructor() { }

  ngOnInit(): void {
  }

}

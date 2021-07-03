import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styles: [
  ]
})
export class AttributeComponent implements OnInit {
  imageUrl="favicon.ico"
  isEnabled:boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}

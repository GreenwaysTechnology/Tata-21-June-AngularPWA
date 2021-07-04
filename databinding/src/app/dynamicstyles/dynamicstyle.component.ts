import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamicstyle',
  template: `
    <h1 style="text-align: center;"> Styles </h1>

    <div [class.card]="isActive">
              <p [style.text-decoration]="activeLinkStyle" >Hello</p>
     </div>
    <button (click)="changeStyle()">Apply Color</button>
  `,
  styles: [
  ]
})
export class DynamicstyleComponent implements OnInit {
  isActive: boolean = false
  activeLinkStyle='overline'
  changeStyle() {
    this.isActive = !this.isActive
  }
  constructor() { }

  ngOnInit(): void {
  }

}

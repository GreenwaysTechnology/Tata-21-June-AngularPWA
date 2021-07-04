import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styles: [
  ]
})
export class ItemdetailComponent implements OnInit {

  @Input()
  item:string=""

  constructor() { }

  ngOnInit(): void {
  }

}

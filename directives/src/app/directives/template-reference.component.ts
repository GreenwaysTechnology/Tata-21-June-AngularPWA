import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styles: [
  ]
})
export class TemplateReferenceComponent implements OnInit {
  color:string = 'red'
  firstname:string ='Default'

  public setName(name:string){
     this.firstname = name;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

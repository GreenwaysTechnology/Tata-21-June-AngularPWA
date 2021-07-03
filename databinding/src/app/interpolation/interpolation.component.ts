import { Component, OnInit } from '@angular/core';
import { Address } from '../types/address.type';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styles: [
  ]
})
export class InterpolationComponent implements OnInit {

  ///data : model
  //string
  firstName: string = "Subramanian"
  lastName = "Murugan";

  //numbers
  salary: number = 1000;
  tax = 10;

  //booleans
  status: boolean = true

  //object
  address: Address = {
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    doorno: 10
  }
  skills: Array<string> = ["JavaScript", "TypeScript", "Angular", "MicroServices"];



  constructor() { }

  ngOnInit(): void {
  }

}

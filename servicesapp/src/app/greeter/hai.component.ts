import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HaiService } from './hai.service';

@Component({
  selector: 'app-hai',
  templateUrl: './hai.component.html',
  styles: [
  ]
})
export class HaiComponent implements OnInit {

  // message!: string;
  message!: Observable<string>

  constructor(private service: HaiService) { }

  // async ngOnInit(): Promise<void> {
  //   //callback style
  //   // this.service.sayHai((message: string) => {
  //   //   this.message = message
  //   // })
  //   //Promises and thenables
  //   // this.service.sayHai().then(
  //   //   (message: string) => {
  //   //     this.message = message;
  //   //   }
  //   // ).catch(err => {
  //   //   console.log(err);
  //   // })
  //  // this.message = await this.service.sayHai()

  // }
  ngOnInit(): void {

    // this.service.sayHai().subscribe((message: string) => {
    //   this.message = message;
    // }, err => {

    // }, () => {

    // })
    this.message = this.service.sayHai();
  }

}

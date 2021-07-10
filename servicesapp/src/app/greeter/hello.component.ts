import { Component, OnInit } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styles: [
  ]
})
export class HelloComponent implements OnInit {

  message: string = "";

  constructor(private helloService: HelloService) { 
     this.message = this.helloService.sayHello();
  }

  ngOnInit(): void {
  }

}

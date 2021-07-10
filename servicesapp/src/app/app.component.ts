import { Component } from '@angular/core';
import { HelloService } from './greeter/hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicesapp';
  message: string = "";

  constructor(private helloService: HelloService) { 
     this.message = this.helloService.sayHello();
     console.log(this.message)
  }
}

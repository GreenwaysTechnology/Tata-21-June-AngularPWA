import { Component } from "@angular/core";

@Component({
  selector: 'app-root', // tag name
  // template: `
  //     <h1>Tata Technologies </h1>  
  // `
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    console.log('app component constructor is called')
  }
}
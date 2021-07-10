import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello.component';
import { HaiComponent } from './hai.component';
// import { HelloService } from './greeter.service';

@NgModule({
  declarations: [
    HelloComponent,
    HaiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HelloComponent,
    HaiComponent
  ],
 // providers: [HelloService]
})
export class GreeterModule { }

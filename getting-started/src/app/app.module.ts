import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
// import { GreeterModule } from "./greeter/greeter.module";
import { GreeterModule } from "./greeter";
// import { GreeterComponent } from "./greeter/greeter.component";
// import { HaiComponent } from "./greeter/hai.component";
// import { HelloComponent } from "./greeter/hello.component";
// import { WeclomeComponent } from "./greeter/welcome.component";
// import { GreeterComponent,HelloComponent,WeclomeComponent,HaiComponent } from "./greeter";


@NgModule({
  // declarations: [AppComponent,GreeterComponent,HaiComponent,HelloComponent,WeclomeComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, GreeterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
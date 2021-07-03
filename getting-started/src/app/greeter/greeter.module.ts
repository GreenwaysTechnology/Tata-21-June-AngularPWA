import { NgModule } from "@angular/core";
import { GreeterComponent } from "./greeter.component";
import { HaiComponent } from "./hai.component";
import { HelloComponent } from "./hello.component";
import { WeclomeComponent } from "./welcome.component";

@NgModule({
    declarations: [GreeterComponent, HelloComponent, HaiComponent, WeclomeComponent],
    imports: [],
    providers: [],
    exports: [GreeterComponent]
})
export class GreeterModule {

}
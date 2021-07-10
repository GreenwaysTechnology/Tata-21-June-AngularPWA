import { Injectable } from "@angular/core";
import { GreeterModule } from "./greeter.module";

// @Injectable({
//     providedIn: GreeterModule // uses GreeterModule injector to create service object
// })
@Injectable({
    providedIn: 'root' //uses root Injector to create service Object
})
export class HelloService {
    constructor() {
        console.log('Hello Service is created')
    }
    //biz methods; service methods
    public sayHello(): string {
        return "Hello!!"
    }
}
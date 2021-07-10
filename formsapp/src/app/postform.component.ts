import { Component } from "@angular/core";
import { Post } from "./models/form.modle";


@Component({
    selector: 'app-post-form',
    templateUrl: 'postform.component.html'
})
export class PostFormComponent {
    post: any;
    categories:Array<string> = ["User Interface","MicroServices","Database","Devops"];
    submitted: boolean = false;

    constructor() {
        this.post = new Post(Math.random(), "Learn Angular", "Misko Hevery",this.categories[0])
    }
    onSubmit(){
        this.submitted = !this.submitted;
        console.log(this.post)
    }
}
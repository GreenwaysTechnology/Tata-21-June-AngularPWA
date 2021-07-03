import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../types/todo.type';

@Component({
  selector: 'app-todo-presentation',
  templateUrl: './todo-presentation.component.html',
  styles: [
  ]
})
export class TodoPresentationComponent implements OnInit {

  @Input()
  todos:Array<Todo>=[]
  constructor() { }

  ngOnInit(): void {
  }

}

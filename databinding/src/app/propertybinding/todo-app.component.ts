import { Component, OnInit } from '@angular/core';
import { TODOS } from '../mock-data/todo.mock';
import { Todo } from '../types/todo.type';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styles: [
  ]
})
export class TodoAppComponent implements OnInit {

  todos: Array<Todo> = TODOS


  constructor() { }

  ngOnInit(): void {
  }

}

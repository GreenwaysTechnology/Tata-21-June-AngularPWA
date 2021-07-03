import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../types/todo.type';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styles: [
  ]
})
export class TodoContainerComponent implements OnInit {

  @Input()
  todos: Array<Todo> = []

  constructor() { }

  ngOnInit(): void {
  }

}

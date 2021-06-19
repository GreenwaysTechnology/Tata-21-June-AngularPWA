import {Todo} from '../types/todo.type'
import {TODOS} from '../mock-data/todos'

export class TodoService {
    constructor() {

    }
    findAll(): Array<Todo> {
        return TODOS;
    }
}
import { TodoService } from "./services/todo.service";


function main() {
    let todoService = new TodoService();
    console.log(todoService.findAll())
}
main()
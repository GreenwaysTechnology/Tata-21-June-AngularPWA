"use strict";
exports.__esModule = true;
var todo_service_1 = require("./services/todo.service");
function main() {
    var todoService = new todo_service_1.TodoService();
    console.log(todoService.findAll());
}
main();

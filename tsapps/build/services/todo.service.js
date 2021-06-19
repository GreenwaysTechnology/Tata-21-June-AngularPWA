"use strict";
exports.__esModule = true;
exports.TodoService = void 0;
var todos_1 = require("../mock-data/todos");
var TodoService = /** @class */ (function () {
    function TodoService() {
    }
    TodoService.prototype.findAll = function () {
        return todos_1.TODOS;
    };
    return TodoService;
}());
exports.TodoService = TodoService;

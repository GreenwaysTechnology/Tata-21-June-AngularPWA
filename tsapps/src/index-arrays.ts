//Generics - <Type>

//arrays : two syntax: normal and generics

let names: string[] = ["A", "B"];

//Generics
let numbers: Array<number> = [1, 2, 3, 4, 5, 7, 8];

//Object array

type Todo = {
    id: number;
    text: string;
    status: string;
}
//
let todos1: Todo[] = [
    {
        id: 1,
        text: 'learn ts',
        status: 'completed'
    }
]

let todos: Array<Todo> = [{
    id: 1,
    text: 'learn ts',
    status: 'completed'
},
{
    id: 2,
    text: 'learn pwa',
    status: 'not completed'
}
];


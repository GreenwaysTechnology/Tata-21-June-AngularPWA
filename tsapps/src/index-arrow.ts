//arrow functions

let hello = function () {
    console.log("Hello")
};
hello()

let hai = () => {
    console.log("Hello")
};
hai()
//code refactoring: if function has one line of code and remove {}
hai = () => console.log("Hello")
hai()

//parameters and args
let add = (a: number = 0, b: number = 0): number => {
    let c = a + b;
    return c
}
console.log(add(10, 10))

// only return statement

add = (a: number = 0, b: number = 0): number => a + b;
console.log(add(10, 10))



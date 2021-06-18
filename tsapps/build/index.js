function sayHello() {
    //function body
    console.log('Hello');
}
sayHello();
//function parameters and args
//args receiver, params - values which are passed
//name is arg 
//name is by default type inferenced
// function sayHai(name) {
//     console.log(`Hello ${name}`)
// }
function sayHai(name) {
    console.log("Hello " + name);
}
//subramanian is parameter
sayHai('subramanian');
//sayHai() - compile time error
sayHai(100);
sayHai(true);
function add(a, b) {
    var c = a + b;
    console.log("Add " + c);
}
add(10, 10);
//add() //undefined
//add("10",90)
//if you have designed an api , takes 5 args, i dont want to supply all or any one of the parameter , how we can avoid
//es 6 - default args
//ts  - optional args
//default args
function mutiply(a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    var c = a * b;
    console.log("mutiply " + c);
}
mutiply(10, 10);
mutiply();
//optional args
function doAccept(a, b) {
    console.log("Do Accept " + a + " " + b);
}
doAccept("hello", "hai");
doAccept();
//Type safe navigation Operator ?. - which converts undefined /null into undefined
function findLength(a) {
    console.log("Length of " + (a ? a : "No value supplied") + " is " + ((a === null || a === void 0 ? void 0 : a.length) ? a.length : 0));
}
findLength("SBRAMANIAN");
findLength();
findLength(null);
//return type
function getStockValue() {
    return 100;
}
function doStuff() {
    //  return 10
    return; //void
}
//advanced arg type : Union type ; variable can hold more than one type
// id : string | number | someotherType
function printId(id) {
    console.log("id " + id);
}
printId(100);
printId("abc12");
//use case : i want to do computation against that variable
function printIdV1(id) {
    if (typeof id === 'string') {
        console.log("id---> " + id.toUpperCase());
    }
    else {
        console.log("id " + id);
    }
}
printIdV1(899);
printIdV1("psd001a");
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople("subramanian");
welcomePeople(['subu', 'ram']);

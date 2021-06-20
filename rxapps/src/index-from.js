import { from } from "rxjs";

//data source
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//create Observerable from array
let stream = from(numbers)

stream.subscribe(data => {
    console.log(data)
}, err => {
    console.log(err)
}, () => console.log('done'))

const promise = Promise.resolve('Hello!!');

const promiseSource = from(promise);
promiseSource.subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));

const map = new Map();
map.set(1,"subramanian");
map.set(2,"Shirisha");

const mapSource=from(map);
mapSource.subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));

const stringSource=from('Hello world');
stringSource.subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));

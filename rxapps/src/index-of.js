//of operator : sequence of values
import { of } from "rxjs";

const stream = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],["hello","Hai"])


stream.subscribe(data => {
    console.log(data)
}, err => {
    console.log(err)
}, () => console.log('done'))
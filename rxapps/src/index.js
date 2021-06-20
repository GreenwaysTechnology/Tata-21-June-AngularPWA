//data processing
import { range } from "rxjs"
import { filter, map } from "rxjs/operators"

//any operator is based on functional programming principles
//1.pure function :  function never modifies orginal data rather it creates new data structure(immutable) 
//eg if call filter()=>new Object(Observable)=>operator=>new Object(Observable)==>Operator =>new Object(Observable).subscribe(finalproceed)

const stream = range(1, 100).pipe(
    filter(i => {
        console.log('fitler is called for ',i)
        return i % 2 === 0 //return true/ false ; data will be returned to next pipe line if condition is true =>
    }),
    map(x => {
        console.log('map is called')
        return x
    })
)

stream.subscribe(data => console.log(`Subscriber is called for ${data}`), err => console.log(err), () => console.log('done'))
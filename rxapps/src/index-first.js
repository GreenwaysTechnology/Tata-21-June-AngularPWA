import { range, from } from 'rxjs';
import { filter ,last, first,map, take} from 'rxjs/operators'



const source = range(1, 10);

//even numbers /  odd numbers

const evenNumbers = source.pipe(
    filter(value => {
        return value % 2 === 0
    }),
    first()

);
evenNumbers.subscribe(data => console.log(data), err => console.log(err), () => console.log('done'));
import {
    Subject
} from 'rxjs';


const subject = new Subject();

subject.subscribe(v => console.log(`S-1 : ${v}`))
subject.subscribe(v => console.log(`S-2 : ${v}`))
subject.subscribe(v => console.log(`S-3 : ${v}`))
subject.subscribe(v => console.log(`S-4 : ${v}`))

for (let i = 0; i < 10; i++) {
    subject.next(i);
}
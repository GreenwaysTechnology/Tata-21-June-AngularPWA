import {
    AsyncSubject
} from 'rxjs';

const asyncSubject = new AsyncSubject();

asyncSubject.subscribe(v => console.log(`Asyn Subject-1 : ${v}`))
asyncSubject.subscribe(v => console.log(`Asyn Subject-2 : ${v}`))
asyncSubject.subscribe(v => console.log(`Asyn Subject-3 : ${v}`))

for (let i = 0; i <= 10; i++) {
    asyncSubject.next(i);
}
asyncSubject.complete()
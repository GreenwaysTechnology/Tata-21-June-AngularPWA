import { Observable } from "rxjs";

const stream = new Observable(observer => {
    //start pushing data to observer
    observer.next(100)
    observer.next(200);
    //   observer.complete();
    // observer.error(new Error('gone'));
    setTimeout(() => {
        observer.next('async data')
        observer.complete();
    }, 4000)
    observer.next(100)
    observer.next(900)
  // observer.complete();

})

//we need subscription

stream.subscribe(data => {
    console.log(data)
}, err => {
    console.log(err)
}, () => console.log('done'))

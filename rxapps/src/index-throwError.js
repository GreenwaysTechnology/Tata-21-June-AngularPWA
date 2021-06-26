//Error handling
import { throwError, of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'


//catch errors in subscribe block

// const source = Observable.create(observer => {
//     observer.next('good')
//     observer.error(new Error('something went wrong'))
// });
// source.subscribe(data => console.log(data),error=>console.log('error'))

//throwError consider error as success payload
// const source = throwError("something went wrong");
// source.subscribe(data => console.log(data))
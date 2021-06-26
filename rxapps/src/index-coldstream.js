//multi cast : cold
import {
   interval
} from 'rxjs';

const coldStream = interval(1000);

coldStream.subscribe(data => {
    console.log(" Subramanian's : " + data + " who is running  ")
}, err => console.log(err), () => console.log('Subramanian is done!'));

coldStream.subscribe(data => {
    console.log(" Ram's : " + data + " who is running  ")
}, err => console.log(err), () => console.log('Ram is done!'));

setTimeout(() => {
    console.log('Karthik is joining late');
    coldStream.subscribe(data => {
          console.log(" Karthik's : " + data + " who is running  ")
    }, err => console.log(err), () => console.log('Karthik is done!'));
}, 5000);
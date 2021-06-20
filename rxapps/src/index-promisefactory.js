//Promise is Design pattern to write better nested callbacks
//Promise interally uses callbacks 
//Promise is abstraction for callbacks
//Promise is by default async - which uses timer with 0 ms.
//Promise object available inside es 6 by default.
//Promise OBject can be created in two ways - constructors -new  /  factory api

function delay() {
    let isValid = false
    if (isValid) {
        return Promise.resolve('success')
    }
    else {
        return Promise.reject('Something went wrong!!')
    }
}
console.log('start')
delay()
    .then(res => console.log(res))
    .catch(err => console.log(err))
console.log('end')
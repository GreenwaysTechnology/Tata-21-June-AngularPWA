//callback nesting
/**
 * The out put of one callback will be input to another callback.
 * 
 * callback Hell: Nesting many callbacks which leads code complxity - this is called as callback hell
 *  
 */

const getUser = (resolve, reject) => {
    console.log('get User is called')
    //biz logic
    let user = {
        id: 1,
        name: 'Subramanian'
    }
    //user = null;
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, { err: 'User not Found' })
    }
}

const showPage = (status, resolve, reject) => {
    console.log('showPage is called')

    let admin = "You are admin"
    let guest = "YOu are guest"

    if (status === 'Login Success') {
        setTimeout(resolve, 1000, admin)
    } else {
        setTimeout(reject, 1000, guest)
    }
}
const login = (user, resolve, reject) => {
    console.log('login is called')

    let success = "Login Success"
    let error = "Login Failed"

    if (user.name === 'Subramanian') {
        setTimeout(resolve, 1000, success)
    } else {
        setTimeout(reject, 1000, error)
    }
}

getUser(user => {
    //login
    login(user, status => {
        //console.log(status)
        showPage(status, page => {
            console.log(page)
        }, errPage => {
            console.log(errPage)
        })
    }, error => {
        console.log(error)
    })
}, err => {
    console.log(err)
})

const getUser = () => {
    console.log('get User is called')
    //biz logic
    let user = {
        id: 1,
        name: 'Subramanian'
    }
    //user = null;
    return new Promise((resolve, rejct) => {
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(rejct, 1000, { err: 'User Not found' })
        }
    })
}
const login = user => {
    console.log('login is called')

    let success = "Login Success"
    let error = "Login Failed"

    return new Promise((resolve, reject) => {
        if (user.name === 'Subramanian') {
            setTimeout(resolve, 1000, success)
        } else {
            setTimeout(reject, 1000, error)
        }
    })

}
const showPage = (status) => {
    console.log('showPage is called')

    let admin = "You are admin"
    let guest = "YOu are guest"

    return new Promise((resolve, reject) => {
        if (status === 'Login Success') {
            setTimeout(resolve, 1000, admin)
        } else {
            setTimeout(reject, 1000, guest)
        }
    })
  
}

getUser()
    .then(user => {
        return login(user)
    })
    .then(status => {
        return showPage(status)
    })
    .then(page => {
        console.log(page)
    })
    .catch(error => {
        console.log(error)
    })
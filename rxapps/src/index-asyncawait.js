//async and await will replace then and catch, make code more readable


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

async function main() {

    try {
        const user = await getUser()
        const status = await login(user)
        const page = await showPage(status)
        console.log(page)
    }
    catch (err) {
        console.log(err)
    }

}
main();


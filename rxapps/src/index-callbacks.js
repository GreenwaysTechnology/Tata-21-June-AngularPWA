//async programming 
//ways
//1.callbacks
//2.promises
//3.async await

function delay(action) {
    let response = "Hey,How are you?"
    setTimeout(action, 5000,response)
}
function log(status){
    console.log(status)
}
log('start')
delay(function (response) {
    console.log('i am delayed',response)
})
log('end')
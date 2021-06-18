//undefined

//if variable is declared with implicit undefined , that variable can hold any type of value in future assignment

let valid;
console.log(`Valid ${valid}`)

valid =true;
console.log(`Valid ${valid}`)

valid =0;
console.log(`Valid ${valid}`)


//if variable is declared with explicit undefined , that variable can hold any type of value in future assignment
let myvar:undefined
//myvar =100; it is compiltime error.

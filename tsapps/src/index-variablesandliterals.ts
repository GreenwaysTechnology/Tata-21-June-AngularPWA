//variables and literals

//strings
var firstName = "Subramanian"
let lastName = 'Murugan'

//string concatnation
console.log("Name " + firstName + lastName)
console.log("Name ", firstName, lastName)

//new style string template literal.`` - es 6
//string interpolation
console.log(`Name ${firstName} ${lastName}`)

let title = 'Tata Technologies'
let htmlPage = `
    <html>
      <head>
       <title>
          ${title}
       </title>
     </head>
     <body>
      <h1>Welcome</h1>
     </body>
     </html>
`;
console.log(htmlPage);

//numbers
let a = 100;
let b = 200;

console.log(`a ${a} ${b}`)

//booleans
let isValid = true;
let isEnabled = false;

console.log(`isValid ${isValid} isEnabled ${isEnabled}`)

//undefined
let price;
let qty;
console.log(`price ${price} ${qty}`);

//NaN

let totalPrice = price * qty;
console.log(`Total Price ${totalPrice}`)

//Type conversion

let counter = "10";
let totalCounter = counter * 10;//"10" will be converted into number: implicit conversion

let totalCounter1 = parseInt(counter) * 10 //explicit conversion

let totalCounter2 = +counter * 10 // here + operator is used to convert string to number

console.log(`Total counter ${totalCounter} ${totalCounter1} ${totalCounter2}`)

//type conversion and NaN

counter = "$100"
totalCounter = counter * 100
totalCounter1 = parseInt(counter) * 100
totalCounter2 = +counter * 10

console.log(`Total counter ${totalCounter} ${totalCounter1} ${totalCounter2}`)

//div/0 
let myprice =100;
let avgPrice = myprice / 0;
console.log(`Avg Price ${avgPrice}`)

//type of operator

console.log(`First Name Type ${typeof firstName}`) // string
console.log(`a Type ${typeof a}`) // string
console.log(`totalPrice(NaN) ${typeof totalPrice}`) // string
console.log(`avgPrice(infinity) ${typeof avgPrice}`) // string

console.log(`isValid Type ${typeof isValid}`) // string
console.log(`price(undefined) ${typeof price}`) // string

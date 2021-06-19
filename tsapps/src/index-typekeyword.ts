//Type for literal object
//ways for setting type for literal object
//1.classes : Type classes
//2.interfaces : Type interfaces
//3.type keyword


//types for literals
class Employee {
    id: number;
    name: string;
    city?: string;
    state?: string;
    isValid?: boolean;
}

let employee: Employee = {
    id: 1,
    name: 'Subramanian',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    isValid: true
}
console.log(employee)

let employee2: Employee = {
    id: 1,
    name: 'Karthik'
}
//interfaces
interface Account {
    acno: string;
    name: string;
    openingbalance?: number
    closingbalance?: number
}

let sb: Account = {
    acno: "1A",
    name: "Subramanian",
    openingbalance: 1000,
    closingbalance: 890
}
let loan: Account = {
    acno: "1A",
    name: "Subramanian",
}

//type 

type Product = {
    pid: number;
    pname: string;
    price?: number;
}

let product: Product = {
    pid: 1,
    pname: 'phone',
    price: 10000
}



//concrete /regurlar base class

class Account {
    constructor() {
        console.log('account is called')
    }
    //method
    protected deposit(): number {
        return 10;
    }
    public withdraw(amount): number {
        return amount;
    }
}

//child class
class SavingsAccount extends Account {
    constructor() {
        super();
        console.log('savings account is called')
    }
    //overriding
    public deposit(): number {
        return 100 * super.deposit();
    }
    public changeInterest() {
        return 100
    }
}

//sb is reference variable,what is type of sb;
//here type of sb is infered as SavingsAccount
let sb = new SavingsAccount();
console.log(sb.deposit())
console.log(sb.changeInterest())

let sb1 = new SavingsAccount() as Account
//console.log(sb1.deposit())
//console.log(sb1.changeInterest())
console.log(sb1.withdraw(1222))

let sb2: Account = new SavingsAccount()
// console.log(sb2.deposit())
// console.log(sb2.changeInterest())
console.log(sb2.withdraw(1222))
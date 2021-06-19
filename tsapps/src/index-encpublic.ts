//Encapsulation : by default all instance variables and methods are public.


class Employee {
    public id: number;
    public name: string;
    public isValid: boolean;
    constructor(id = 1, name = "Subramanian", isVaild = true) {
        this.id = id;
        this.name = name;
        this.isValid = isVaild;
    }
    //methods
    public calculateSalary(salary: number): string {
        return salary?.toFixed(2) ? salary.toFixed(2) : "Invalid"
    }
}
let emp = new Employee();
console.log(emp.id, emp.name, emp.isValid, emp.calculateSalary(1000.786543))

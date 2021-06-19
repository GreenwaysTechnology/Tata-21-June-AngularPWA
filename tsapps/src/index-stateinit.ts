//Object creation using classes

class Employee {
    id: number;
    name: string;
    isValid: boolean;
    constructor(id = 1, name = "Subramanian", isVaild = true) {
        this.id = id;
        this.name = name;
        this.isValid = isVaild;
    }
    //methods
    calculateSalary(salary: number): string {
        return salary?.toFixed(2) ? salary.toFixed(2) : "Invalid"
    }
}
let emp = new Employee();
console.log(emp.id, emp.name, emp.isValid, emp.calculateSalary(1000.786543))

emp = new Employee(223,"Karthik",false);
console.log(emp.id, emp.name, emp.isValid, emp.calculateSalary(1000.786543))

//after object creation
emp.id = 100
emp.name = "Ram"
emp.isValid = false
console.log(emp.id, emp.name, emp.isValid, emp.calculateSalary(null))
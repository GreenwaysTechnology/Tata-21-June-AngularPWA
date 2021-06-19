//Object creation using classes

class Employee {
    //instance variables and methods
    id: number = 1;
    name: string = "Subramanian"
    isValid: boolean = true
    //methods
    calculateSalary(salary: number): string {
        return salary?.toFixed(2) ? salary.toFixed(2) : "Invalid"
    }
}
let emp = new Employee();
console.log(emp.id,emp.name,emp.isValid,emp.calculateSalary(1000.786543))
console.log(emp.id,emp.name,emp.isValid,emp.calculateSalary(null))
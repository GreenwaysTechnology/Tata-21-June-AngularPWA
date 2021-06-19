
class Employee {
    constructor(public id: number = 1, public name: string = "Subramanian", public isWorking?: boolean, private key?: string) { }

    public getKey(): string {
        return this.key
    }
}
let emp = new Employee(1, "subramanian", true, "A001889");

console.log(emp.id, emp.name, emp.isWorking,emp.getKey())
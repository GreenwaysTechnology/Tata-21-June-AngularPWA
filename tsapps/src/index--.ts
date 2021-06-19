type Subject = {
    code: number;
    name: string
    duration?: number;
}
function Course(subject: Subject) {
    return function (target: any) {
        //decorator logic
        Object.defineProperty(target.prototype, "subject", {
            value: subject
        })
    }
}
//field level decorator

function Input(label: string) {
    return function (target: any, key: string) {
        //logic
        Object.defineProperty(target, key, {
            get: () => label
        });
    }
}
function calculatable(value: boolean = true) {
    return function (target: any, prop: any, propdescriptor: PropertyDescriptor) {
        propdescriptor.writable = value;
        console.log('target',target);
        console.log('prop',prop);
        console.log('propdescriptor',propdescriptor)
    }
}


@Course({ code: 1, name: 'React', duration: 5 })
class Student {
    @Input('Subramanian')
    firstName: string;
    @Input('Murugan')
    lastName: string;
    constructor() { }

    @calculatable(false)
    public calculateCost(): number {
        return 1000;
    }
}
let student = new Student() as any;


console.log(`${student.firstName} ${student.lastName} is learning ${student.subject.code} ${student.subject.name} ${student.subject.duration} cost: ${student.calculateCost()}`)

student.calculateCost = function () {
    return 5000;
}
console.log(`${student.firstName} ${student.lastName} is learning ${student.subject.code} ${student.subject.name} ${student.subject.duration} cost: ${student.calculateCost()}`)

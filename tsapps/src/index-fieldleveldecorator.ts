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


@Course({ code: 1, name: 'React', duration: 5 })
class Student {
    @Input('Subramanian')
    firstName: string;
    @Input('Murugan')
    lastName: string;
    constructor() { }
}
let student = new Student() as any;
console.log(`${student.firstName} ${student.lastName} is learning ${student.subject.code} ${student.subject.name} ${student.subject.duration}`)

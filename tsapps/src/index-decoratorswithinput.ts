// function Course(subject: string = "Typescript") {
//     return function (target: any) {
//         //decorator logic
//         Object.defineProperty(target.prototype, "subject", {
//             value: subject
//         })
//     }
// }
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

@Course({ code: 1, name: 'React', duration: 5 })
class Student {
    constructor(public name: string = "Subramanian") { }
}
let student = new Student() as any;
console.log(`${student.name} is learning ${student.subject.code} ${student.subject.name} ${student.subject.duration}`)

@Course({ code: 1, name: 'React', duration: 5 })
class Teacher {
    constructor(public name: string = "Brdan Eich") { }
}
let teacher = new Teacher() as any;
console.log(`${teacher.name} is teaching ${teacher.subject.name}`)
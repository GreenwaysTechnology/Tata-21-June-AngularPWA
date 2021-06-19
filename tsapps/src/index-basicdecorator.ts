//Decorators
/**
 * Decorator is function.
 * 
 * Rules:
 * 1.Decorator function must take arg
 * 
 */

//target is variable , its value will be on which decorator is attched
function Course(target:any) {
   //decorator logic
   Object.defineProperty(target.prototype,"subject",{
       value: 'Type script'
   })
}

@Course
class Student {
    constructor(public name: string = "Subramanian") { }
}
let student = new Student() as any;
console.log(`${student.name} is learning ${student.subject}`)

@Course
class Teacher {
    constructor(public name: string = "Brdan Eich") { }
}
let teacher = new Teacher() as any;
console.log(`${teacher.name} is teaching ${teacher.subject}`)
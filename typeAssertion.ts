//Type assertion is a mechanism which tells the compiler about the type of a variable. 
//TypeScript determines that the assignments is invalid, then we have an option to override the type using a type assertion.
let empCode: any = 111;
let employeeCode = <number> empCode;
console.log(typeof(employeeCode));
console.log(typeof(empCode));

//TWO ways to do type assertion
// 1. Using angular bracket
// 2. Using as keyword
let emp: any = 65;
let emp1 = <number> emp;

//as keyword
let emp3: any = 111;
let emp4 = emp3 as number;

//Type assertion with Object
// let student = {}
// student.name = "Rapid";  //error
interface Student {
    name: string,
    code: number,
}
let student = <Student> {}
student.name = "Rapid";
student.code = 101;
console.log(typeof(student));
//Type assertion is a mechanism which tells the compiler about the type of a variable. 
//TypeScript determines that the assignments is invalid, then we have an option to override the type using a type assertion.
var empCode = 111;
var employeeCode = empCode;
console.log(typeof (employeeCode));
console.log(typeof (empCode));
//TWO ways to do type assertion
// 1. Using angular bracket
// 2. Using as keyword
var emp = 65;
var emp1 = emp;
//as keyword
var emp3 = 111;
var emp4 = emp3;
var student = {};
student.name = "Rapid";
student.code = 101;
console.log(typeof (student));

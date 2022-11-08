//An interface declaration is an another way to name an object type:
interface Point{
    x: number;
    y: number;
}
function printCoord(pt: Point){
    console.log("Coordinate's x value is - "+pt.x);
    console.log("Coordinate's y value is - "+pt.y);
}
printCoord({x: 40, y: 50});
//Just like when we used a type alias, the example works just as if we had used an anonymous object type.

// An Interface is a keyword which is used to declare a TypeScript interface.
// An Interface_name is the name of the interface
// An Interface body contains variables and methods declarations.

interface OS {
    name : string;
    language : string;
}

let OperatingSystem = (type: OS): void => {
    console.log(`Android ${type.name} has ${type.language}`);
};
let os1 = {name : `O+`, language : `Java`}  //an object
OperatingSystem(os1);   //calling function

// Interface Inheritance
//SINGLE INTERFACE INHERITANCE
interface Person {
    name : string;
    age : number;
}
interface Employee extends Person {
    gender : string;
    empCode : number;
}
let obj1 = <Employee>{};
obj1.name = `Harsh`;
obj1.age = 28;
obj1.gender = `Male`;
obj1.empCode = 101;
console.log(`NAME - ${obj1.name}`);
console.log(`CODE - ${obj1.empCode}`);

//MULTIPLE INTERFACE INHERITANCE
interface Person1 {
    name : string;
}
interface PersonDetail {
    age : number;
    gender : string;
}
interface Employee1 extends Person1, PersonDetail {
    empCode : number;
}
let obj2 = <Employee1>{};
obj2.name = `John`;
obj2.age = 29;
obj2.gender = `Male`;
obj2.empCode = 102;
console.log(`Name - ${obj2.name}`);
console.log(`Code - ${obj2.empCode}`);

// ARRAY TYPE INTERFACE

//Array which return string
interface nameArray {
    [index:number]:string;
}
//use of the interface
let myNames:nameArray;
myNames = [`Kiran`,`Punnu`,`Beta`,`Alien`];

//Array which return number
interface ageArray {
    [index:number]:number;
}
let ages:ageArray;
ages = [24,22,18,23];

console.log(`My Name is ${myNames[0]}`);
console.log(`My age is ${ages[0]}`);
// The type of index in the Array is always number.

// INTERFACE IN A CLASS
// A class implements the interface by using the implements keyword.
interface Person2 {
    firstName : string;
    lastName : string;
    age : number;
    fullName();
    getAge();
}

//implements the interface
class Employee2 implements Person2{
    constructor(fName:string,lName:string,age:number) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
    }
    firstName : string;
    lastName : string;
    age : number;
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getAge() {
        return this.age;
    }
}
let emp = new Employee2(`Steve`,`Roger`,45);
console.log(`Full Name - ${emp.fullName()}  Age - ${emp.getAge()}`);
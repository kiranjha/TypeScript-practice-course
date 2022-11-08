function printCoord(pt) {
    console.log("Coordinate's x value is - " + pt.x);
    console.log("Coordinate's y value is - " + pt.y);
}
printCoord({ x: 40, y: 50 });
var OperatingSystem = function (type) {
    console.log("Android ".concat(type.name, " has ").concat(type.language));
};
var os1 = { name: "O+", language: "Java" }; //an object
OperatingSystem(os1); //calling function
var obj1 = {};
obj1.name = "Harsh";
obj1.age = 28;
obj1.gender = "Male";
obj1.empCode = 101;
console.log("NAME - ".concat(obj1.name));
console.log("CODE - ".concat(obj1.empCode));
var obj2 = {};
obj2.name = "John";
obj2.age = 29;
obj2.gender = "Male";
obj2.empCode = 102;
console.log("Name - ".concat(obj2.name));
console.log("Code - ".concat(obj2.empCode));
//use of the interface
var myNames;
myNames = ["Kiran", "Punnu", "Beta", "Alien"];
var ages;
ages = [24, 22, 18, 23];
console.log("My Name is ".concat(myNames[0]));
console.log("My age is ".concat(ages[0]));
//implements the interface
var Employee2 = /** @class */ (function () {
    function Employee2(fName, lName, age) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
    }
    Employee2.prototype.fullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Employee2.prototype.getAge = function () {
        return this.age;
    };
    return Employee2;
}());
var emp = new Employee2("Steve", "Roger", 45);
console.log("Full Name - ".concat(emp.fullName(), "  Age - ").concat(emp.getAge()));

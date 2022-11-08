// Without arrow function  
var getResult = function (username, points) {
    return `${username} scored ${points} points`;
};
console.log(getResult(`Chris`, 10));
// ES6: With arrow function  
var getResult1 = (username, points) => {
    return `${username} scored ${points} points!`;
};
console.log(getResult1(`Chris`, 20));
//Arrow function in class
class Student {
    constructor(code, name) {
        this.showDetail = () => console.log("Student Code: " + this.studCode + '\nStudent Name: ' + this.studName);
        this.studName = name;
        this.studCode = code;
    }
}
let stud = new Student(101, 'Tony Stark');
stud.showDetail();

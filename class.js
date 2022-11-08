// CLASS 
var Student = /** @class */ (function () {
    function Student(rol, name) {
        this.stEnrol = rol;
        this.stName = name;
    }
    Student.prototype.getGrade = function () {
        return 'A+';
    };
    return Student;
}());
// CREATING OBJECT FOR CLASS
var stud = new Student(101, 'Jarvis');
console.log("Student Enrol :- ".concat(stud.stEnrol));
console.log("Student Name :- ".concat(stud.stName));
console.log("Grade :- ".concat(stud.getGrade()));

// CLASS 
class Student {
    stEnrol : number;
    stName : string;

    constructor(rol : number, name : string) {
        this.stEnrol = rol;
        this.stName = name;
    }
    getGrade(): string {
        return 'A+';
    }
}
// CREATING OBJECT FOR CLASS
let stud = new Student(101,'Jarvis');
console.log(`Student Enrol :- ${stud.stEnrol}`);
console.log(`Student Name :- ${stud.stName}`);
console.log(`Grade :- ${stud.getGrade()}`);





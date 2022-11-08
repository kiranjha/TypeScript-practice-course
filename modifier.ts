// access modifiers
// public protected private
// public - within, subclass, via class instance
// protected - within, subclass
// private - within
//bydefault public
//public
/*class Student {
    public studCode: number;
    studName: string;
}

let stud = new Student();
stud.studCode = 101;
stud.studName = "Joe Root";

console.log(stud.studCode + " " + stud.studName);

//private
class Student1 {
    public studCode: number;
    private studName: string;
    constructor(code: number, name: string) {
        this.studCode = code;
        this.studName = name;
    }
    public display() {
        return (`My unique code: ${this.studCode}, my name: ${this.studName}.`);
    }
}

let student: Student1 = new Student1(1, "JoeRoot");
//console.log(student.studName);  //Property 'studName' is private and only accessible within class 'Student1'
console.log(student.display());

// Protected
class Student2 {
    public studCode: number;
    protected studName: string;
    constructor(code: number, name: string) {
        this.studCode = code;
        this.studName = name;
    }
}
class Person extends Student2 {
    //public studCode: number;
    private department: string;

    constructor(code: number, name: string, department: string) {
        super(code, name);
        this.department = department;
    }
    public getElevatorPitch() {
        return (`My unique code: ${this.studCode}, my name: ${this.studName} and I am in ${this.department} Branch.`);
    }
}
let joeRoot: Person = new Person(1, "JoeRoot", "CS");
console.log(joeRoot.getElevatorPitch());

//Readonly Modifier
class Company {
    readonly country: string = "India";
    readonly name: string;

    constructor(contName: string) {
        this.name = contName;
    }
    showDetails() {
        console.log(this.name + " : " + this.country);
    }
}

let comp = new Company("JavaTpoint");
comp.showDetails(); // JavaTpoint : India  
console.log(comp.country);*/
   //comp.name = "TCS"; //Error, name can be initialized only within constructor  

// PRACTICE
class Shape {
    private leng : number;
    private width : number;
    constructor() {
        this.leng = 10;
        this.width = 10;
    }
    protected area(len:number, wid:number) {
        //console.log(len*wid);
        return len*wid;
    }
}
class Rectangle extends Shape {
    areaOf(){
        console.log(this.area(20,10));
    }
}

// let shape = new Shape();
// console.log(shape.width);

let rect = new Rectangle();
rect.areaOf();
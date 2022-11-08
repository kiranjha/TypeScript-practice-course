// Without arrow function  
var getResult = function(username, points) {  
    return `${username} scored ${points} points`;  
  };  
  console.log(getResult(`Chris`,10));
    
  // ES6: With arrow function  
  var getResult1 = (username: string, points: number): string => {  
    return `${ username } scored ${ points } points!`;  
  }  
  console.log(getResult1(`Chris`,20))

  //Arrow function in class
  class Student {  
    studCode: number;  
    studName: string;  
    constructor(code: number, name: string) {  
            this.studName = name;  
            this.studCode = code;  
    }  
    showDetail = () => console.log("Student Code: " + this.studCode + '\nStudent Name: ' + this.studName)  
}  
let stud = new Student(101, 'Tony Stark');  
stud.showDetail();  
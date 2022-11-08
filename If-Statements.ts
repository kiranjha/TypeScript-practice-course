// In a programming language, the programming uses decision making for specifying onw or more conditions to be evaluated by the program.
// The decision making always returns the Boolean result true or false.
//There are various types of Decision making in TypeScript:
// 1. if-statement
// 2. if-else statement
// 3. if-else-if ladder
// 4. nested if statment

// if statement
let a = 10, b = 85;
if(a < b) {
    console.log(`${a} is less than ${b}`);
}

// if-else statement
let n = 10
if (n > 0) {
    console.log(`The input value is positive number : ${n}`);
} else {
    console.log(`The input value is negative Number : ${n}`);
}

//if-else-if ladder
/*if(condition1){  
//code to be executed if condition1 is true  
}else if(condition2){  
//code to be executed if condition2 is true  
}  
else if(condition3){  
//code to be executed if condition3 is true  
}  
else{  
//code to be executed if all the conditions are false  
}   */
let marks = 95;
if (marks >= 0 && marks < 50) {
    console.log(`Fail`)
} else if (marks >= 50 && marks < 60) {
    console.log(`D Grade`)
} else if (marks >= 60 && marks < 70) {
    console.log(`C Grade`)
} else if (marks >= 70 && marks < 80) {
    console.log(`B Grade`)
} else if (marks >= 80 && marks < 90) {
    console.log(`A Grade`)
} else if (marks >= 90 && marks < 100) {
    console.log(`A+ Grade`)
} else {
    console.log(`Invalid`)
}

// Nested if Statement
let n1 = 10, n2 = 22, n3 = 25;
if (n1 >= n2) {
    if (n1 >= n3) {
        console.log(`The Largest Number is ${n1}`)
    } else {
        console.log(`The Largest Number is ${n3}`)
    }
} else {
    if (n2 >= n3) {
        console.log(`The Largest Number is ${n2}`)
    } else {
        console.log(`The Largest Number is ${n3}`)
    }
}

// We can classify the loops in two types:
// Indefinite Loops
//while loop
//do-while Loop
// Definite Loops
//for loop
// while loop
//while loop iterates the elements for the infinite number of times. 
//It executes the instruction repeatedly until the specified condition evaluates to true.
var num = 4;
var factorial = 1;
while (num >= 1) {
    factorial = factorial * num;
    num--;
}
console.log("The factorial of the number is : ".concat(factorial));

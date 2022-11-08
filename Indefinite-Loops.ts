// We can classify the loops in two types:
// Indefinite Loops
        //while loop
        //do-while Loop
// Definite Loops
        //for loop

// while loop
//while loop iterates the elements for the infinite number of times. 
//It executes the instruction repeatedly until the specified condition evaluates to true.
let num = 4;
let factorial = 1;

while(num >= 1) {
    factorial = factorial*num;
    num--;
}
console.log(`The factorial of the number is : ${factorial}`);

//do-while loop
//do-while loop iterates the elements for the infinite number of times similar to the while loop. 
//But there is one difference from while loop, i.e., it gets executed at least once whether the condition is true or false.
let n = 10;
do {
    console.log(n);
    n++;
} while(n <= 15);
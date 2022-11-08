// Definite Loop
// for loop
// for ..of loop
// for ..in loop

// for..of loop
// The for..of loop is used to iterate and access the elements of an array, string, set, map, list, or tuple collection. 
let arr = [1,2,3,4,5];
for (let val of arr) {
    console.log(val);
}

// for..in loop
// The for..in loop is used with an array, list, or tuple.
// This loop iterates through a list or collection and returns an index on each iteration.
let str:any = `JavaTpoint`;
for(let index in str) {
    console.log(`Index of ${str[index]}: ${index}`);
}

// for..of V/S for..in loop
let myArray = [10,20,30,40,50];
console.log(`Output of for..in loop`);
for (let index in myArray) {
    console.log(index);
}
console.log("Output of for..of loop");
for(let val of myArray) {
    console.log(val);
}
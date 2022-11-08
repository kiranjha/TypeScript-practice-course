//console.log("Hello World");
/*var num =1;
let numb = 1;
ES5 ECMASCRIPT
ECMAScript is the standard and let is included in the 6th edition draft and will most likely be in the final specification
ES5 var
ES6 2015 var let
ES2016*/
// Variable declarations or diff b/w var and let
//var is scoped to the nearest outside the block
//let is scoped to the nearest enclosing block
/*function count(){
   for(let i = 0; i < 5; i++){
       console.log(i);
   }
   console.log("loop end "+i);
}
count();*/
// TYPES IN typescript
// let myNum: number;   //NUMBER
// myNum = 1;
// console.log("Number - "+myNum);
// let myStr: string;   //STRING
// myStr = "Hello World";
// console.log(" string - "+myStr);
// let myBool: boolean; //BOOLEAN
// myBool = true;
// console.log("Boolean - ",myBool);
// let myAny: any;  //ANY
// myAny = " any data type "
// console.log("Any Type - "+ myAny);
//AARRAY
//let array_name[:datatype] = [val1,val2,valn..]  
var arrStr; //STRING ARRAY
arrStr = ["Hello", "World"];
console.log("String type Array - " + arrStr);
var arrNum; //NUMBER ARRAY
arrNum = [1, 2, 3, 4, 5];
console.log("Number type Array - " + arrNum);
var arr = ['diwali', 200, 1];
console.log("Length of Array before push - " + arr.length);
arr.push(52);
console.log("Legth of Array after push - " + arr.length);
console.log("Array[0] : " + arr[0]);
//CONSTANT type 
// let num: number;        // not constant type
// num = 1;
// console.log("Let - "+num);
// const num1 = 2;
// console.log("Constant - "+num1);
// let num2:3; //if let id type 3
// num2 = 3;   // must initialise with the same before use
// console.log("Let but type 3 - "+ num2);
//Type ASSERTION
//Type assertion have two forms.
// One is the "angle-bracket" syntax:
// The other is the as-syntax:
// let count;
// count = "hello world";
// (<string>count).length;
// (count as string).length;
// ARROW function in typescript
// => Arrow function
// It is called the fat arrow (because -> is a thin arrow and => is a fat arrow) and aslo called a lamda function (because of other language)
// var name2 = function(user){
//     console.log("Name - "+user);
// }
// let name1 = (user1) => console.log("Name 1 - "+user1);
// INTERFACE in typescript
// function details(age:number,name:string){
//     console.log(age,name);
// }
// details(11,'Kiran');
//OPERATORS
// type objType = {name:string,age:number,email:string}    //define a type
// const person:{name:string,age:number,email:string} = {
//     name: 'Kiran',
//     age: 24,
//     email: 'abc@gmail.com'
// }
// const user:objType = {
//     name: 'Punnu',
//     age: 24,
//     email: 'kipu@gmail.com'
// }
// console.log(user.name);

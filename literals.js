//In addition to the general types string and number, we can refer to specific strings and numbers in their positions
var changingString = "Hello World";
changingString = "Hi World";
//Because `changingString` can represent any possible string, that
//is how TypeScript describes it in the type system
changingString;
var constantString = "Hello world";
//Because `constantString` can only represent 1 possible string, it
//has a literals type representation 
constantString;
//By themselves, literals types aren't very valuable
var x = "hello";
//OK
x = "hello";
//
//x = "hi";   //error - Type '"hi"' is not assignable to type '"hello"'.
//It is not much use to have a variable that can only have one value!
//But by combining lietrals into unions, you can express a much 
//more useful concept - for example, functions that only accept a certain set of known values:
function printText(s, alignment) {
}
printText("Hello world", "left");
//printText("Good day","centre"); //error - Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.
//NUMERIC LITERALS
//numeric literals types work the same way:
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log("COMPARE string using literals - " + compare("Kiran", "Kiran"));

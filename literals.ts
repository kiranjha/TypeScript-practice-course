//In addition to the general types string and number, we can refer to specific strings and numbers in their positions
let changingString = "Hello World";
changingString = "Hi World";
//Because `changingString` can represent any possible string, that
//is how TypeScript describes it in the type system
changingString;

const constantString = "Hello world";
//Because `constantString` can only represent 1 possible string, it
//has a literals type representation 
constantString;

//By themselves, literals types aren't very valuable
let x: "hello" = "hello";
//OK
x = "hello";
//
//x = "hi";   //error - Type '"hi"' is not assignable to type '"hello"'.

//It is not much use to have a variable that can only have one value!
//But by combining lietrals into unions, you can express a much 
//more useful concept - for example, functions that only accept a certain set of known values:
function printText(s: string, alignment: "left" | "right" | "center"){

}
printText("Hello world","left");
//printText("Good day","centre"); //error - Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.

//NUMERIC LITERALS
//numeric literals types work the same way:
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log("COMPARE string using literals - "+compare("Kiran","KIRAN"));

//Of course, you can combine with non-literals types:
interface Options {
    width: number;
}
function configure(x: Options | "auto"){

}
configure({ width: 50 });
configure("auto");
//configure("automatic");   //error - Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.

//There is one more kind of literal type: boolean literals. There 
//are only two boolean literals types, and you might guess,
//they are the types true and false. The type boolean itself
//is actually just an alias for the union true | false.

//Literal Inference
//when you initialise a variable with an object, Typescript assumes that the properties of that object might change values later. 
/*const obj = {
    counter: 0
};
if(obj.counter === 0) {
    obj.counter = 1;
}*/
//Here typescript doesn't assumes the assignment pof 1 to a field which previously had 0 is an error. 
//Another way to saying this is that obj.counter must have the type number, not 0, because types are used to determine botj reading anf writing behavior




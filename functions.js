//function aspects
// function declaration
//function definition
//function call
// Two types of function creation
// Named function
// Anonymous Function
function display() {
    console.log("Hello World!");
}
display();
//Anonymous function
// syntax - let res = function(arg){}
let myAdd = function (x, y) {
    return x + y;
};
// Anonymous function call  
console.log(myAdd(5, 3));
//FUNCTION PARAMETER can be categories into 3 
// Optional Parameter
// default Parameter
// Rest Parameter
//Optional Parameter
// ? sign
function showDetails(id, name, e_mail_id) {
    console.log("ID:", id, " Name:", name);
    if (e_mail_id != undefined)
        console.log("Email-Id:", e_mail_id);
}
showDetails(101, "Pratham Prashant");
showDetails(105, "Deepmala", "deepamala@rapidinnovation.dev");
//Default Parameter
function addNum(x, y, z = 0) {
    return x + y + z;
}
console.log(addNum(10, 20, 30));
//REST PARAMETER
//The rest parameter is used to pass zero or more values to a function. 
// We can declare it by prefixing the three "dot" characters ('...') before the parameter.
//RULES - 
// Only one parameter is allowed in a function
// It must be an array type
// It must be the last parameter in a parameter list
function sum(a, ...b) {
    let result = a;
    for (var i = 0; i < b.length; i++) {
        result += b[i];
    }
    return result;
}
let result1 = sum(3, 5);
let result2 = sum(3, 5, 7, 9);
console.log(result1 + "\n" + result2);

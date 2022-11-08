// There are 3 types of function parameters :-
// 1. Optional Parameter
// 2. Default Parameter
// 3. Rest Parameter
// OPTIONAL PARAMETER
function showDetails(id, name, email) {
    console.log("ID :- ".concat(id, "    Name :- ").concat(name));
    if (email != undefined) {
        console.log("Email :- ".concat(email));
    }
}
showDetails(101, 'John');
showDetails(102, 'Chris', 'chris@gmail.com');
//DEFAULT PARAMETER
//Typescript provides an option to set default values to the function parameters.
function displayName(name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return "".concat(greeting, " ").concat(name, " !");
}
console.log(displayName('Jarvis')); //Hello Jarvis
console.log(displayName('Jarvis', 'Hi')); //Hi Jarvis
//REST PARAMETER
// It is used to passs zero or more values to a function.
// We can declare it by prefixing the three 'dot' characters ('...') before the parameter.
// -- we can use only one rest paraameter in a fucntion
// -- It must be an array type
// -- t must be the last parameter in a parameter type
function sum(num1) {
    var num2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        num2[_i - 1] = arguments[_i];
    }
    var result = num1;
    for (var i = 0; i < num2.length; i++) {
        result += num2[i];
    }
    return result;
}
console.log(sum(10, 20));
console.log(sum(10, 20, 30, 40));
//let arr = [12,44,20];
//console.log(arr[Math.floor(Math.random()*Math.floor(arr.length))]);

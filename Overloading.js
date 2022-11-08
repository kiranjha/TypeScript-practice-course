//function definition
function add(a, b) {
    return a + b;
}
console.log(add("hello", " world"));
console.log(add(30, 20));
//FUNCTION OVERLOADING IN A CLASS
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.foo = function (arg) {
        if (typeof (arg) === 'number')
            return arg.toString();
        if (typeof (arg) === 'string')
            return arg.length;
    };
    return A;
}());
var obj = new A();
console.log("Result : " + obj.foo(501));
console.log("Length of String : " + obj.foo("501"));
//NOTE :- Function overloading with a different number of parameters and different types along with the same function name is not supported.

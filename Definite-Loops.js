// Definite Loop
// for loop
// for ..of loop
// for ..in loop
// for..of loop
// The for..of loop is used to iterate and access the elements of an array, string, set, map, list, or tuple collection. 
var arr = [1, 2, 3, 4, 5];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val);
}
// for..in loop
// The for..in loop is used with an array, list, or tuple.
// This loop iterates through a list or collection and returns an index on each iteration.
var str = "JavaTpoint";
for (var index in str) {
    console.log("Index of ".concat(str[index], ": ").concat(index));
}
// for..of V/S for..in loop
var myArray = [10, 20, 30, 40, 50];
console.log("Output of for..in loop");
for (var index in myArray) {
    console.log(index);
}
console.log("Output of for..of loop");
for (var _a = 0, myArray_1 = myArray; _a < myArray_1.length; _a++) {
    var val = myArray_1[_a];
    console.log(val);
}

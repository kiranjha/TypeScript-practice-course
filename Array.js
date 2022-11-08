//Array Declaration
// 1. 1Using sqaure brackets.
//syntax - let array_name[:datatype] = [val1,val2,val3,val4,valn]
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fruits = ['Mango', 'Watermelon', 'Grapes'];
//using generic array type
//synatax - let array_name: Array<elementType> = [val1,val2,val3,val4,valn]
var fruits1 = ['Apple', 'Orange', 'Papaya'];
console.log("Array[0] : " + fruits1[0]);
//multi-dimentional array
//syntax - let array_name: datatype[][] = [ [a1,a2,a3] , [b1,b2,b3] ];
//initialisation
//let arr_name: datatype[initial_array_index][referenced_aray_index] = [ [val1,val2,val3] , [v1,v2,v3] ];
var arr = [[1, 2, 3, 4], [5, 6, 7, 8]];
console.log(arr[0][0]);
//Array Object
//syntax - let arr_name: datatype[] = new Array(values);
var names = new Array("Kiran", "Shivansh", "Arun", "Deepan", "Sourav", "Yash", "Prathmesh");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
for (var i in names) {
    console.log("----" + names[i]);
}
//Passing Array to function
function display(arr_values) {
    for (var i = 0; i < arr_values.length; i++) {
        console.log("| |" + names[i]);
    }
}
display(names); //calling function with parameter array
//SPREAD Operator
//copy array
var arr1 = [1, 2, 3, 4];
var arr2 = __spreadArray([], arr1, true);
console.log(arr2);
//create new array from existing array with more elements
var arr3 = __spreadArray(__spreadArray([], arr1, true), [5, 6], false);
console.log(arr3);
//merging array
var arr4 = __spreadArray(__spreadArray([], arr1, true), arr3, true);
console.log(arr4);

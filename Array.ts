//Array Declaration
// 1. 1Using sqaure brackets.
//syntax - let array_name[:datatype] = [val1,val2,val3,val4,valn]

let fruits: string[] = ['Mango','Watermelon','Grapes'];

//using generic array type
//synatax - let array_name: Array<elementType> = [val1,val2,val3,val4,valn]
let fruits1: Array<string> = ['Apple','Orange','Papaya']
console.log("Array[0] : "+fruits1[0]);

//multi-dimentional array
//syntax - let array_name: datatype[][] = [ [a1,a2,a3] , [b1,b2,b3] ];

//initialisation
//let arr_name: datatype[initial_array_index][referenced_aray_index] = [ [val1,val2,val3] , [v1,v2,v3] ];
let arr: number[][] = [ [1,2,3,4] , [5,6,7,8] ];
console.log(arr[0][0]);

//Array Object
//syntax - let arr_name: datatype[] = new Array(values);
let names: string[] = new Array("Kiran","Shivansh","Arun","Deepan","Sourav","Yash","Prathmesh");
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}
for(let i in names){
    console.log("----"+names[i]);
}

//Passing Array to function
function display(arr_values: string[]) {
    for(let i = 0; i < arr_values.length; i++) {
        console.log("| |"+names[i]);
    }
}
display(names); //calling function with parameter array

//SPREAD Operator
//copy array
let arr1 = [1,2,3,4];
let arr2 = [...arr1];
console.log(arr2);

//create new array from existing array with more elements
let arr3 = [...arr1,5,6];
console.log(arr3);

//merging array
let arr4 = [...arr1, ...arr3];
console.log(arr4);

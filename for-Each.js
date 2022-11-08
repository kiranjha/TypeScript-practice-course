// The forEach() method is an array method which is used to execute a function on each item in an array. 
// We can use it with the JavaScript data types like Arrays, Maps, Sets, etc. 
// It is a useful method for displaying elements in an array.
// Syntax array.forEach(callback[, thisObject]);
// let apps = [`WhatsApp`,`Instagram`,`Facebook`,`Telegram`];
// let playStore = [];
// apps.forEach(function (item) {
//     playStore.push(item);
// });
// console.log(playStore);
var apps = ['WhatsApp', 'Instagram', 'Facebook'];
var playStore = [];
apps.forEach(function (item) {
    playStore.push(item); //Argument of type 'string' is not assignable to parameter of type 'never'.
});
console.log(playStore);
var num = [5, 10, 15];
num.forEach(function (value) {
    console.log(value);
});
//Disadvantages of forEach()
// 1. It does not provide a way to stop or break the forEach() loop
// 2. It only works with arrays.

// Map is a new data structure added in Ess5 version of javascript. It allows us to store data in a key-value pair and remembers the original insertion order of the keys similar to other programming languages. 
// we can use any value either as a key or as  avalue.
// create map - let map = new Map();

let map = new Map();
map.set(`1`, `Kiran`);
map.set(1, `https://blog.beraliv.dev/2022-09-10-with-or-without-enums`);
map.set(true, `bool1`);
map.set(`2`, `Arun`);

//methods-
// map.set(key,value)
//map.get(key)
//map.has(key) true/false
//map.delete(key) true/false
//map.size
//map.clear()

console.log("Value1 = " + map.get(1));
console.log("Value2 = " + map.get('1'));
console.log("Key is Present= " + map.has(3));
console.log("Size = " + map.size);
console.log("Delete value = " + map.delete(1));
console.log("New Size = " + map.size); 

// Iterating Map Data
let ageMapping = new Map();
ageMapping.set(`Shakti`,25);
ageMapping.set(`Rashmi`,24);
ageMapping.set(`Priyam`,23);
ageMapping.set(`Jasmin`,24);
ageMapping.set(`Jasmin`,24);
console.log(`Map size = ${ageMapping.size}`)    //4
//Iterate over map keys
for(let key of ageMapping.keys()) {
    console.log(`Map Key = ${key}`);
}

//Iterate over map values
for(let value of ageMapping.values()) {
    console.log(`Map Value = ${value}`);
}

//Iterate over map entries
console.log(`Map Entries :-`);
for(let entry of ageMapping.entries()) {
    console.log(entry[0], entry[1]);
}
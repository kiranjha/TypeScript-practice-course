// It allows us to store distinct data (each value occur only once) into the List similar to other programming languages.
// Sets are a bit similar to maps, but it stores only keys, not the key-value pairs.
//Create Set
let mySet = new Set()

//Set Methods
//set.add(value) add values in the set
//set.has(value) true/false
//set.delete() true/false remove entries from the set
//set.size() 
//set.clear() //remove everything from the set

let std = new Set()

//Add values
std.add(`John`)
std.add(`Peter`)
std.add(`Gayle`)
std.add(`Kohli`)
std.add(`Chris`)
std.add(`Hena`)
std.add(`Steve`)

//Returns set data
console.log(`Student Names ${std}`);

//check values is present or not
console.log(std.has("Kohli"));
console.log(std.has(10));

//it returns size of set
console.log(std.size);

//delete a value from set
console.log(std.delete(`dhawan`));

let play = new Set();
play.add(`John`)
play.add(`Peter`)
play.add(`Gayle`)
play.add(`Kohli`)
play.add(`Kohli`)
console.log(play)

//Changing of add() method is allowed in Typescript
play.add(`1`).add(`2`).add(`3`).add(`4`);
console.log(play)

//returns set data after clear
play.clear();
console.log(play)

// Iterating Set Data
// for..of loop
let diceEntries = new Set();

diceEntries.add(1).add(2).add(3).add(4).add(5).add(6);

//Iterate over set entries  
console.log("Dice Entries are:");
for (let diceNumber of diceEntries) {
    console.log(diceNumber);
}

// Iterate set entries with forEach  
console.log("Dice Entries with forEach are:");
diceEntries.forEach(function (value) {
    console.log(value);
});





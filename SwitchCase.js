// switch case 
var a = 3, b = 2;
switch (a + b) {
    case 1: {
        console.log("a + b is 1 ");
        break;
    }
    case 2: {
        console.log("a+b is 2");
        break;
    }
    case 3: {
        console.log("a+b is 3");
        break;
    }
    case 4: {
        console.log("a+b is 4");
        break;
    }
    default: {
        console.log("a+b is 5");
        break;
    }
}
// switch case with string
var grade = 'A';
switch (grade) {
    case "A+":
        console.log("Marks >= 90\nExcellent");
    case "A":
        console.log("Marks [>= 80 and < 90]\n Good");
    case "B+":
        console.log("Marks [>= 70 && < 80]\nAbove Average");
        break;
    case "B":
        console.log("Marks [>= 60 && < 70]\nAverage");
        break;
    case "C":
        console.log("Marks [< 60>]\nBelow Average");
        break;
    default:
        console.log("Invalid Marks");
}
//Switch case with Enum
var Direction;
(function (Direction) {
    Direction[Direction["East"] = 0] = "East";
    Direction[Direction["West"] = 1] = "West";
    Direction[Direction["North"] = 2] = "North";
    Direction[Direction["South"] = 3] = "South";
})(Direction || (Direction = {}));
;
var dir = Direction.South;
console.log(dir);
function getDirection() {
    switch (dir) {
        case Direction.North:
            console.log("You are in North Direction");
            break;
        case Direction.East:
            console.log("You are in East");
            break;
        case Direction.South:
            console.log("You are in South");
            break;
        case Direction.West:
            console.log("You are in West");
            break;
    }
}
getDirection();
// Switch statement is fall through
//switch statement fall through means if a break statement is not present, then it executes all statements after the first match case.
var number = 20;
switch (number) {
    //switch case without break statements
    case 10: console.log("10");
    case 20: console.log("20");
    case 30: console.log("30");
    default: console.log("Not in 10, 20 or 30");
}

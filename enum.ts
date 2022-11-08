//Enums allow a developer to define a set of named constants.
//using enums can make it easier to document intent, or create a set of distinct cases.
//Typescript provides both numeric and string based enums.

//NUMERIC ENUMS
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
//Above, we have a numeric enum where Up is initialised with 1. 
//All of the folowing members are auto-incremented from that point on. (Up has 1, Down has 2, Left has 3, Right has 4)
enum Direction1 {
    Up, //here Up would have 0
    Down, //Down 1
    Left,
    Right
}
//using enum
enum UserResponse {
    No = 0,
    Yes = 1,
}
function respond(recipient: string, message: UserResponse): void {

}
respond("Kiran Jha", UserResponse.Yes);

//Enum s without initializer either need to be first, or have to come after numeric enums initialized with numeric constants or other constant enum members.
//Below is not allowed -
/* enum E {
   A = getSomeValue(),
   B,  //Enum member must have initialiser
}*/

//STRING ENUMS
//In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member.
enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

var x;
console.log(x);
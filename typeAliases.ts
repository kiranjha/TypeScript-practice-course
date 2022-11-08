// We have been using object types and union types by writting them directly in type annotations. 
// This is convinient, but it's common to want to use the same type more than once and refer to it by a single name.
type Point = {
    x: number;
    y: number
}
function printCoord(pt: Point){
    console.log("Coordinate's x value is - "+pt.x);
    console.log("Coordinate's y value is - "+pt.y);
}
printCoord({ x: 45, y: 50});

//You can actually use a type alias to give a name to any type at all,
//not just an object type. 
// For example, a type alias can name a UNION type:
type ID = number | string;

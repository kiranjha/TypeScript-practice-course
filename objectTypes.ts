// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }){
    console.log("The coordinate's x value is "+pt.x);
    console.log("The coordinate's y value is "+pt.y);
}
printCoord({ x: 3, y: 7});

//Optional Properties
//Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:
function printName(obj: { first: string; last?: string }){
    console.log("First Name : "+obj.first);
    console.log("Last Name : "+obj.last?.toUpperCase()); //remove `?` will give error - Object is possibly 'undefined'.
}
printName({ first: "Kiran"});
printName({ first: "Kiran", last: "Jha"});
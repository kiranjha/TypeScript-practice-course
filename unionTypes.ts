//The first way to combine types you might see is a union type.
//A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.
function printId(id: number | string){
    console.log("Your ID is : "+id);
}
//OK
printId(101);
//OK
printId("E101");
//Error
//printId({ myId: 101});//Argument of type '{ myId: number; }' is not assignable to parameter of type 'string | number'.

//TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string:
function changeCaseId(id: number | string){
    //console.log(id.toUpperCase()); 
    //Property 'toUpperCase' does not exist on type 'string | number'.
    //Property 'toUpperCase' does not exist on type 'number'.
}

// The solution is to narrow thw union with code, the same as you would in Javascript without type annotation
//example
function printIdLowerCase(id: number | string){
    if(typeof id === "string")
    console.log(id.toLowerCase());
    else
    console.log(id);
}
printIdLowerCase(102);
printIdLowerCase("E102");

// If every member in a UNION has a property in common, you can use that property without narrowing:
function getFirstThree(x: number[] | string){
    return x.slice(0,3);
}
console.log("First Three letter of KIRAN JHA "+getFirstThree("Kiran Jha"));

//Another Example is to use a function like Array.isArray
function welcomePeople(x: string[] | string){
    if(Array.isArray(x))
    console.log("Hello "+x.join(" , "));
    else
    console.log("Welcome lone traveler "+x.toUpperCase());
}
welcomePeople("Kiran")
welcomePeople(["Kiran","Arun","Shivansh","Deepan","Yash","Sourav","Prathmesh"])
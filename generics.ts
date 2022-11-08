function users<T>(input:T): T {
    let output = new Number();
    return output;
}
// function users(input: any): any{
//     console.log(input.length);
//     return input;
// }
console.log(typeof(users<number>(35)));
//console.log(typeof(users("Generics")));
//console.log(typeof(users({ language: 'Typescript'})));

function merge (objA ): OBJECT
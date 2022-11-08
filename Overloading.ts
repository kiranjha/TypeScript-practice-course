//function with string parameter
function add(a:string, b:string): string;
//function with number parameter
function add(a: number, b:number): number;
//function definition
function add(a: any, b: any): any {
    return a+b;
}

console.log(add("hello"," world"));
console.log(add(30,20));

//FUNCTION OVERLOADING IN A CLASS
class A {
    public foo(s: string): number;
    public foo(n: number): string;
    public foo(arg: any): any{
        if(typeof(arg)==='number')
        return arg.toString();
        if(typeof(arg)==='string')
        return arg.length;
    }
}
let obj = new A();
console.log("Result : "+obj.foo(501));
console.log("Length of String : "+obj.foo("501"));
//NOTE :- Function overloading with a different number of parameters and different types along with the same function name is not supported.
/*function display(x:number, y:number):void //Compiler Error: Duplicate function implementation  
{  
    console.log(x + x);  
}  
  
function display(x:string): void //Compiler Error: Duplicate function implementation  
{  
    console.log(x);  
}  */
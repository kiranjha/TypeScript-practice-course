// Inheritance through the extends keyword
// we can use it for Method Overriding (so runtime polymosphism can be achieved).
// We can use it for Code Reusability

// SINGLE INHERITANCE
class Laptop {
    ram : string;
    
    constructor(ram : string) {
        this.ram = ram;
    }
}

class Dell extends Laptop{
    processor : string;

    constructor(ram : string, processor : string) {
        super(ram);
        this.processor = processor;
    }
    display() {
        console.log(`RAM - ${this.ram}`);
        console.log(`PROCESSOR - ${this.processor}`);
    }
}
let obj = new Dell(`16GB`,`i5`);
obj.display();

// MULTILEVEL INHERITANCE
class Animal {
    eat(): void {
        console.log(`Eating`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log(`Barking`);
    }
}

class BabyDog extends Dog {
    weep(): void {
        console.log(`Weeping`);
    }
}

let obj1 = new BabyDog();
obj1.eat();
obj1.bark();
obj1.weep();

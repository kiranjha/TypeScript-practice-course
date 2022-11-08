// Inheritance through the extends keyword
// we can use it for Method Overriding (so runtime polymosphism can be achieved).
// We can use it for Code Reusability
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// SINGLE INHERITANCE
var Laptop = /** @class */ (function () {
    function Laptop(ram) {
        this.ram = ram;
    }
    return Laptop;
}());
var Dell = /** @class */ (function (_super) {
    __extends(Dell, _super);
    function Dell(ram, processor) {
        var _this = _super.call(this, ram) || this;
        _this.processor = processor;
        return _this;
    }
    Dell.prototype.display = function () {
        console.log("RAM - ".concat(this.ram));
        console.log("PROCESSOR - ".concat(this.processor));
    };
    return Dell;
}(Laptop));
var obj = new Dell("16GB", "i5");
obj.display();
// MULTILEVEL INHERITANCE
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log("Eating");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Barking");
    };
    return Dog;
}(Animal));
var BabyDog = /** @class */ (function (_super) {
    __extends(BabyDog, _super);
    function BabyDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BabyDog.prototype.weep = function () {
        console.log("Weeping");
    };
    return BabyDog;
}(Dog));
var obj1 = new BabyDog();
obj1.eat();
obj1.bark();
obj1.weep();

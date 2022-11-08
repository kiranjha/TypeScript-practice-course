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
function users(input) {
    var output = input + "generics";
    return input;
}
// function users(input: any): any{
//     console.log(input.length);
//     return input;
// }
//console.log(typeof(users(35)));
console.log(typeof (users("Generics")));
//console.log(typeof(users({ language: 'Typescript'})));
var parent1 = /** @class */ (function () {
    function parent1() {
    }
    parent1.prototype.setName = function (name) {
        this.name = name;
    };
    return parent1;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    child.prototype.getName = function () {
        return this.name;
    };
    return child;
}(parent1));
var C = new child();
console.log(C.setName('Shivansh'));
console.log(C.getName());

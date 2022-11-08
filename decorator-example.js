var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ModifyMessage(sender) {
    return function (target, propertyKey) {
        var modifiedMessage;
        // Return modifiedMessage whenever the message is asked
        var getter = function () {
            return modifiedMessage;
        };
        // Set the modifiedMessage value
        var setter = function () {
            modifiedMessage = "Hello from ".concat(sender, "!");
        };
        // Overwrite the original message with
        // modifiedMessage we just created
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.firstMessage = "Hi there!";
        this.secondMessage = "Hi there!";
    }
    Greeter.prototype.greet = function () {
        console.log("first message: ".concat(this.firstMessage));
        console.log("second message: ".concat(this.secondMessage));
    };
    __decorate([
        ModifyMessage("gfg")
    ], Greeter.prototype, "firstMessage");
    return Greeter;
}());
var myGreeter = new Greeter();
myGreeter.greet();

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
console.log("Hello World");
//types
var myString = "Hello world";
myString = 22 + "";
var myNumber = 22;
var myNumber = 22;
var myBool = false;
var myVar = "hello";
myVar = false;
// strings
document.write(myNumber.toString());
//arrays
var stringArray = ["", "", ""];
stringArray = [1, 2, 3];
//tuple
var strNumTuple;
strNumTuple = ["Hello", 22];
//void, undefined,null
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
function showTodo(todo) {
    console.log(todo.title + " -" + todo.text);
}
var myTodo = {
    title: "Eat Dinner",
    text: "lorem"
};
showTodo(myTodo);
//Clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(" " + this.name + " is registered");
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.AgeInYears = function () {
        return this.age + "years";
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + "  has paid the invoice");
    };
    return User;
}());
var john = new User("John", "john@gmail.com", 24);
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
document.write(john.email);

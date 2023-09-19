//TYPESCRIPT TYPES
// Number (both integers and floating-point numbers)
var integerNumber = 42; // An integer number
var floatingPointNumber = 3.14; // A floating-point number
// String
var myString = "Hello, TypeScript!"; // A string
// Boolean
var isTrue = true; // A boolean with a true value
var isFalse = false; // A boolean with a false value
// Array
var numberArray = [1, 2, 3]; // An array of numbers
var stringArray = ["apple", "banana", "cherry"]; // An array of strings
// Tuples
var booleanStringTuple = [true, "Tuple"]; // A tuple with a boolean and a string
var numberTriple = [1, 2, 3]; // A tuple of three numbers
// Object
var person = { name: "Alice", age: 30 }; // An object with name and age properties
var dictionary = { "one": 1, "two": 2 }; // A dictionary of numbers indexed by string keys
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var color = Color.Blue; // An enumeration mapped to numbers
// Function
var add = function (a, b) { return a + b; }; // A function taking two numbers and returning a number
var greet = function () { return "Hello, TypeScript!"; }; // A function with no parameters returning a string
var log = function (message, isError) {
    if (isError === void 0) { isError = false; }
    if (isError) {
        console.error(message);
    }
    else {
        console.log(message);
    }
}; // A function taking a string and an optional boolean, with no return value
// Any
var anything = 42; // A variable that can hold any type of value
// Void
function doNothing() {
    // This function does not return anything.
}
// Never
var foo; // A variable with the type 'never'
function error(message) {
    throw new Error(message); // A function that never returns
}
// Null
var nullableValue = null; // A variable that can only hold the value null

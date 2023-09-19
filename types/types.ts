// TypeScript Types

// Number (both integers and floating-point numbers)
let integerNumber: number = 42; // An integer number
let floatingPointNumber: number = 3.14; // A floating-point number

// String
let myString: string = "Hello, TypeScript!"; // A string

// Boolean
let isTrue: boolean = true; // A boolean with a true value
let isFalse: boolean = false; // A boolean with a false value

// Array
let numberArray: number[] = [1, 2, 3]; // An array of numbers
let stringArray: string[] = ["apple", "banana", "cherry"]; // An array of strings

// Tuples
let booleanStringTuple: [boolean, string] = [true, "Tuple"]; // A tuple with a boolean and a string
let numberTriple: [number, number, number] = [1, 2, 3]; // A tuple of three numbers

// Object
let person: { name: string, age: number } = { name: "Alice", age: 30 }; // An object with name and age properties
let dictionary: { [key: string]: number } = { "one": 1, "two": 2 }; // A dictionary of numbers indexed by string keys

// Enum
enum Color { Red = 0, Blue, Green };
let color: Color = Color.Blue; // An enumeration mapped to numbers

// Function
let add: (a: number, b: number) => number = (a, b) => a + b; // A function taking two numbers and returning a number
let greet: () => string = () => "Hello, TypeScript!"; // A function with no parameters returning a string
let log: (message: string, isError?: boolean) => void = (message, isError = false) => {
  if (isError) {
    console.error(message);
  } else {
    console.log(message);
  }
}; // A function taking a string and an optional boolean, with no return value

// Any
let anything: any = 42; // A variable that can hold any type of value

// Void
function doNothing(): void {
  // This function does not return anything.
}

// Never
let foo: never; // A variable with the type 'never'

function error(message: string): never {
  throw new Error(message); // A function that never returns
}

// Null
let nullableValue: null = null; // A variable that can only hold the value null

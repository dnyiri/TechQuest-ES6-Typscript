//****************************************************************************************************************************************************************************************************************

// Significance:

// 1. Interface (MyInterface):

//     MyInterface is defined as an interface. Interfaces in TypeScript define a contract or a set of rules that classes must adhere to.
//     It declares a method signature someSpecificMethod(): void;, specifying that any class implementing this interface must provide an implementation for this method.

// 2. Class (ImplementingClass):

//     ImplementingClass is defined as a class that implements the MyInterface interface.
//     It provides an implementation for the someSpecificMethod() method, fulfilling the contract specified by MyInterface.

// 3. Object Creation (new ImplementingClass()):

//     An instance of ImplementingClass is created using the new keyword. This object is of type ImplementingClass because it's an instance of that class.

// 4. Type Assertion (Casting):

//     TypeScript allows you to cast or assert the type of an object using the as keyword or angle brackets (<>).
//     (derived as ImplementingClass).someSpecificMethod(); performs a type assertion, indicating that even though derived is declared as MyInterface, you are telling TypeScript to treat it as if it's of type  ImplementingClass.
//     This allows you to call someSpecificMethod() on derived, which is specific to ImplementingClass.
//     Alternatively, you can use angle brackets: (<ImplementingClass>derived).someSpecificMethod();.

//****************************************************************************************************************************************************************************************************************


interface MyInterface {
  someSpecificMethod(): void;
}

class ImplementingClass implements MyInterface {
  someSpecificMethod(): void {
    console.log("ImplementingClass's method");
  }
}

const derived: MyInterface = new ImplementingClass();
(derived as ImplementingClass).someSpecificMethod(); // Using the 'as' keyword

// Alternatively, using angle brackets
(<ImplementingClass>derived).someSpecificMethod();



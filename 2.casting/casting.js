//****************************************************************************************************************************************************************************************************************
var ImplementingClass = /** @class */ (function () {
    function ImplementingClass() {
    }
    ImplementingClass.prototype.someSpecificMethod = function () {
        console.log("ImplementingClass's method");
    };
    return ImplementingClass;
}());
var derived = new ImplementingClass();
derived.someSpecificMethod(); // Using the 'as' keyword
// Alternatively, using angle brackets
derived.someSpecificMethod();

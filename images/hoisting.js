// Let's try to use the variables before we have declared them
// Hoisting with Variables

console.log(student1); // Variable hoisted, but set to undefined. Prints: undefined
// console.log(student2); // TDZ. Prints: Uncaught ReferenceError: Cannot access 'student2' before initialization
// console.log(student3); // TDZ. Prints: Uncaught ReferenceError: Cannot access 'student3' before initialization

var student1 = "Alice";
let student2 = "Bob";
const student3 = "Charlie";

// Hoisting with Functions
console.log("Hoisting with Functions");
console.log(add_Declaration(2, 3)); // Prints: 5. Function can be called before being declared.

// Because the variables are declared using 'let' and 'const', the same rules that were discussed above apply.
// THe variables are not hoisted, and hence we get the following errors
// console.log(add_Expression(2, 3)); // Error: Uncaught ReferenceError: Cannot access 'add_Expression' before initialization
// console.log(add_ArrowFunction(2,3)); // Error: Uncaught ReferenceError: Cannot access 'add_ArrowFunction' before initialization

// On the other hand, if we use the 'var' definition of the function, we get the following error:
// console.log(add_Expression_with_var(2,3)); // Error: Uncaught TypeError: add_Expression_with_var is not a function
// Now this is interesting, because recall from the above discussion, that variables declared using 'var' are hoisted,
// but they are initialised to 'undefined'.
// Hence the above function call is the same as doing 'undefined(2,3)'.
// And clearly, 'undefined' is NOT a function!!!
// and you can validate this by running this:
console.log(add_Expression_with_var); // Prints: undefined

function add_Declaration(a, b) {
  return a + b;
}

const add_Expression = function (a, b) {
  return a + b;
};

const add_ArrowFunction = (a, b) => a + b;

var add_Expression_with_var = function (a, b) {
  return a + b;
};

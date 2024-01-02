# Modern JavaScript Operators

## Introduction to Destructuring:

Destructuring is an ES6 feature that allows unpacking values from arrays or objects into separate variables.
It simplifies the process of breaking down complex data structures into smaller, more manageable variables.

### Destructuring Arrays:

Destructuring arrays is demonstrated using a simple example array [2, 3, 4].
Without destructuring, each element would be assigned to a separate variable manually.

```javascript
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
const arr = [2, 3, 4];
//without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];
//with destructuring

const [x, y, z] = arr;
console.log(x, y, z);

// Array Destructuring with Skipping Elements

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
```

## Switching Variables with Destructuring:

```javascript
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

//using Destructuring

[main, secondary] = [secondary, main];
console.log(main, secondary);
// a convenient way to switch the values of two variables without using a temporary variable.
```

## Receiving Multiple Values from a Function

```javascript
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
```

### Explanation:

Destructuring is used to return multiple values from a function.
The example demonstrates a restaurant order function returning items from the starter and main menus.

### Nested Array Destructuring

```javascript
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);
```

### Array Destructuring with Default Values

```javascript
const [p = 1, q = 1, r] = [8, 9]; // r undefined
const [p = 1, q = 1, r = 1] = [8, 9]; // r=1
console.log(p, q, r);
```

### Explanation:

Default values can be set in case the array is shorter than expected.
An example shows how default values prevent undefined results when trying to destructure elements beyond the array's length.
default values can be useful when working with data from APIs, where the length of the received array might be unpredictable.

# JavaScript Object Destructuring Examples

## Object Destructuring Basics

In JavaScript, object destructuring is a powerful feature that allows us to extract properties from objects with concise syntax. Let's explore some examples:

## Object Destructuring

```javascript
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
```

## Destructuring with Different Variable Names

```javascript
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
```

## Object Destructuring with Default Values

```javascript
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
```

## Mutating Variables and Nested Objects

### Mutating Variables with Object Destructuring

```javascript
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
```

### Nested Object Destructuring

```javascript
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
```

### Function with Object Destructuring

```javascript
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});

const orderDelivery = ({
  starterIndex = 1,
  mainIndex = 0,
  time = "20:00",
  address,
}) => {
  console.log(
    `Order received! ${restaurant.starterMenu[starterIndex]} and ${restaurant.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  );
};

orderDelivery({ address: "Via del Sole, 21", starterIndex: 2 });
```

## Spread Operator in JavaScript

The spread operator (...) in JavaScript is introduced in ECMAScript 6 (ES6). It is primarily used for expanding or unpacking elements, making certain operations more concise and readable.
The spread operator is a powerful and flexible feature in JavaScript, offering concise ways to manipulate arrays, strings, and objects. It enhances code readability and simplifies common tasks, making it an essential tool for modern JavaScript development.

### Notes

The spread operator works with iterables, including arrays, strings, maps, and sets.
Shallow copying of arrays and objects using the spread operator is compared to the older method using Object.assign().

### 1. Expanding Arrays

The primary use case of the spread operator is to expand the elements of an array into individual items. This is particularly useful when creating new arrays or passing multiple values as function arguments.

```javascript
const arr = [7, 8, 9];
const newArray = [1, 2, ...arr];
// Result: [1, 2, 7, 8, 9]
//  the spread operator takes the elements of the arr array and expands them into the new array.
```

### 2. Creating Shallow Copies of Arrays

The spread operator is instrumental in creating shallow copies of arrays. This ensures that modifications made to the copied array do not affect the original array.

```javascript
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
// Result: copyArray is a new array with the same elements as originalArray
```

### 3. Merging Arrays

You can easily merge two or more arrays using the spread operator, eliminating the need for explicit loops or concatenation methods.

```javascript
const starterMenu = ["Salad", "Soup"];
const mainMenu = ["Pasta", "Pizza", "Risotto"];
const fullMenu = [...starterMenu, ...mainMenu];
// Result: ['Salad', 'Soup', 'Pasta', 'Pizza', 'Risotto']
```

### 4. Expanding Strings

The spread operator also works on strings, allowing you to extract individual characters or create new arrays.

```javascript
const name = "Jonas";
const letters = [...name];
// Result: ['J', 'o', 'n', 'a', 's']
```

### 5. Function Arguments

The spread operator simplifies passing multiple values as arguments to a function.

```javascript
function orderPasta(ing1, ing2, ing3) {
  console.log(
    `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
  );
}

const ingredients = ["Mushrooms", "Asparagus", "Cheese"];
orderPasta(...ingredients);
// Result: Here is your delicious pasta with Mushrooms, Asparagus, and Cheese.
```

### 6. Expanding Objects (ES2018 and later)

Since ES2018, the spread operator also works with objects, allowing you to create shallow copies and merge objects.

```javascript
const restaurant = {
  name: "Classico Italiano",
  mainMenu: ["Pasta", "Pizza", "Risotto"],
};
const newRestaurant = { ...restaurant, founder: "Giuseppe", foundedIn: 1998 };
// Result: { name: 'Classico Italiano', mainMenu: ['Pasta', 'Pizza', 'Risotto'], founder: 'Giuseppe', foundedIn: 1998 }
```

### Rest Pattern in Destructuring:

The rest pattern uses the same syntax as the spread operator (...).

While the spread operator is used to expand arrays, the rest pattern is used to collect multiple elements and condense them into an array.

Example:

```javascript
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// The rest pattern can be used in objects as well:
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
```

### Rest Parameters in Functions:

Rest parameters allow a function to accept an arbitrary number of arguments as an array.

Example:

```javascript
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
```

Rest parameters can be used in function declarations to collect any number of arguments into an array.

### Using Rest Parameters in Function Parameters:

Rest parameters can be applied to function parameters, allowing the function to accept any number of arguments.

```javascript
restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");
// In the orderPizza method, mainIngredient receives the first argument, and otherIngredients collect the rest of the arguments into an array.
```

### Error and Limitations:

The rest element must be the last element in a destructuring assignment.
Only one rest element is allowed in any destructuring assignment.

### Practical Use Cases:

The rest pattern can be used to capture unused elements in destructuring assignments.
Rest parameters are useful when creating functions that need to handle a variable number of arguments.

# Logical Operators and Short-Circuiting in JavaScript

## Introduction

In JavaScript, logical operators like **AND** and **OR** are commonly used to combine Boolean values. However, these operators can also work with non-Boolean values and exhibit a behavior known as **short-circuiting**. Short-circuiting allows for efficient evaluation of logical expressions, and we'll explore this concept using practical examples.

## OR Operator

The **OR** operator returns the first truthy value encountered or the last falsy value if all operands are falsy.

```javascript
console.log(3 || "Jonas"); // Output: 3

// the result is 3 because the first operand is truthy, and the second operand is not evaluated due to short-circuiting.
```

### More Examples

```javascript
console.log("" || "Jonas"); // Output: Jonas
console.log(true || 0); // Output: true
console.log(undefined || null); // Output: null
```

### Short-circuiting occurs when the first operand is truthy. The result is the first truthy value encountered.

```javascript
console.log(undefined || 0 || "" || "hello" || 23 || null); // Output: hello

// In this example, 'hello' is the first truthy value, short-circuiting the evaluation.
```

### Practical Application

Utilizing the OR operator for setting default values:

```javascript
const guestsOne = restaurant.numGuests || 10;
console.log(guestsOne); // Output: 10 (default value)

restaurant.numGuests = 23;
console.log(guestsOne); // Output: 23 (actual value)

// Short-circuiting helps set a default value only if the initial value is falsy.
```

## AND Operator

The AND operator returns the first falsy value encountered or the last truthy value if all operands are truthy.

```javascript
console.log(0 && "Jonas"); // Output: 0
// In this example, the result is 0 because the first operand is falsy, and the second operand is not evaluated due to short-circuiting.
```

### More Examples

```javascript
console.log(true && "Jonas"); // Output: Jonas
console.log(undefined && null); // Output: undefined
console.log("hello" && 23 && null); // Output: null
// Short-circuiting occurs when the first operand is falsy. The result is the first falsy value encountered.
```

### Practical Application

Using the AND operator for conditional execution:

```javascript
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
// This example checks if the orderPizza method exists before calling it, avoiding the need for an explicit if statement.
```

### Conclusion

Understanding short-circuiting with logical operators allows for concise and expressive code. While it's essential to use these features judiciously, they provide powerful tools for handling default values and executing code conditionally in JavaScript.

## Nullish Coalescing Operator in JavaScript

In JavaScript, the Nullish Coalescing Operator (??) provides a solution to a specific issue when using the OR operator (||) to set default values. Let's revisit the code and understand why the nullish coalescing operator is useful.

The Issue with OR Operator
Consider the following code where we use the OR operator to set a default value if numGuests is falsy:

```javascript
const guests = restaurant.numGuests || 10;
```

The problem arises when numGuests is set to zero (a falsy value). In such cases, the OR operator will still use the default value, leading to incorrect results.

### Nullish Coalescing Operator Solution

```javascript
const guestsCorrect = restaurant.numGuests ?? 10;
```

The Nullish Coalescing Operator (??) works similarly to the OR operator but specifically handles nullish values (null and undefined). It only short circuits the evaluation if the first operand is null or undefined, ignoring other falsy values like zero or the empty string.

### Example:

```javascript
restaurant.numGuests = 0;
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); // Output: 0 (correct result)
```

### In this example, the nullish coalescing operator returns the actual value (zero) when numGuests is set to zero, addressing the issue faced with the OR operator.

### Explanation:

The nullish coalescing operator considers only null and undefined as nullish values. Other falsy values like zero or the empty string are not treated as nullish. This allows for more precise handling of default values, ensuring that the default is used only when the value is explicitly null or undefined.

### Conclusion

The nullish coalescing operator is a valuable addition introduced in ES2020, providing a cleaner and more accurate way to set default values, especially in scenarios where falsy values might lead to undesired outcomes. As we progress through projects, you'll see the practical benefits of using this operator.

# Logical Assignment Operators in JavaScript (ES2021)

In ES2021, three new logical assignment operators were introduced: the OR assignment operator (||=), the Nullish assignment operator (??=), and the AND assignment operator (&&=). Let's explore how these operators work with practical examples.

### Creating Restaurant Objects

```javascript
const restaurant1 = {
  name: "La Trattoria",
  numGuests: 20,
};

const restaurant2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};
```

### Using OR Assignment Operator

The OR assignment operator assigns a value to a variable if that variable is currently falsy. It is often used to set default values.

```javascript
restaurant1.numGuests ||= 10;
restaurant2.numGuests ||= 10;
// In the example above, if numGuests is falsy (undefined or null), it will be assigned the value of 10.
```

### Using Nullish Assignment Operator

The Nullish assignment operator assigns a value to a variable if that variable is currently nullish (null or undefined). It is useful when you want to exclude falsy values like zero or an empty string.

```javascript
restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;
```

Here, numGuests will be assigned the value of 10 only if it is currently null or undefined.

### Using AND Assignment Operator

The AND assignment operator assigns a value to a variable if it is currently truthy. It is often used to update values only if they are defined.

```javascript
restaurant1.owner &&= "Anonymous";
restaurant2.owner &&= "Anonymous";
```

In this example, the owner property will be updated to 'Anonymous' only if it is currently truthy.

### Conclusion

The logical assignment operators introduced in ES2021 provide a concise and expressive way to perform common operations. Whether setting default values, ensuring nullish checks, or updating values conditionally, these operators offer a cleaner alternative to traditional approaches. Understanding their behavior can lead to more readable and efficient code.

## Explaining the For-of Loop in JavaScript

### Introduction to For-of Loop

The for-of loop, introduced in ES6, provides a more concise and readable way to iterate over elements in an array or other iterable objects. Unlike the traditional for loop, it simplifies the syntax, making it easier to work with arrays. Let's explore the for-of loop using an example of looping through a menu array in a restaurant.

Example Setup

```javascript
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
```

### Traditional For Loop vs. For-of Loop

```javascript
console.log("Using a regular for loop:");
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

console.log("\nUsing the for-of loop:");
for (const item of menu) {
  console.log(item);
}
```

### Explanation:

The for-of loop syntax is simplified: for (const item of menu).
The loop iterates over the menu array, and item represents the current element.
No need for explicit index management; it's a cleaner and more readable syntax.

### Continue and Break Keywords

The for-of loop supports continue and break keywords, allowing control flow within the loop.

### Accessing Index with Entries

If you also need the index along with the element, you can use the entries method on the array. However, the resulting structure is an array iterator, containing arrays of [index, element].

```javascript
console.log("\nUsing entries for index and element:");
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
```

Explanation:

The entries method provides an array iterator with [index, element] pairs.
The loop de-structures each pair into i (index) and el (element).
The template string logs a formatted menu with indices starting from 1.

### Destructuring in For-of Loop

Destructuring simplifies the extraction of elements when using the for-of loop.

```javascript
console.log("\nUsing destructuring in for-of loop:");
for (const [i, element] of menu.entries()) {
  console.log(`${i + 1}: ${element}`);
}
```

### Explanation:

The de-structuring assignment directly creates variables i and element from the array entries.
This makes the code cleaner and more expressive.

# Enhanced Object Literals in ES6

In ECMAScript 2015 (ES6), three enhancements to object literals were introduced to make working with objects more convenient and expressive. Let's explore these enhancements one by one.

## 1. Shorthand Property Names

Before ES6:

```javascript
const openingHours = {
  hours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 },
  },
};
```

With ES6 Shorthand:

```javascript
const openingHours = {
  hours,
};
```

The hours property is assigned the value of the hours variable.
Shorthand notation allows using the variable name directly as the property
name.

## 2. Enhanced Object Methods

Before ES6:

```javascript
const restaurant = {
  order: function (starter, main) {
    return `${starter} and ${main}, please!`;
  },
};
```

With ES6 Method Syntax:

```javascript
const restaurant = {
  order(starter, main) {
    return `${starter} and ${main}, please!`;
  },
};
```

The function keyword and the colon are omitted.
The method can be defined directly using the simplified syntax.

## 3. Computed Property Names

Before ES6:

```javascript
const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const openingHours = {
  [weekdays[3]]: { open: 12, close: 22 }, // Thursday
  [weekdays[4]]: { open: 11, close: 23 }, // Friday
  [weekdays[5] + 2]: { open: 0, close: 24 }, // day 6
};
```

With ES6 Computed Property Names:

```javascript
const openingHours = {
  [weekdays[3]]: { open: 12, close: 22 }, // Thursday
  [weekdays[4]]: { open: 11, close: 23 }, // Friday
  [`${weekdays[5]} ${2}`]: { open: 0, close: 24 }, // day 6
};
```

Property names can be computed using expressions or template literals.

# Optional Chaining

The optional chaining feature in JavaScript, introduced in ES2020, provides a concise way to handle situations where you need to access nested properties or methods that may not exist. It works with objects, arrays, and even methods.

Let's break down the key concepts and examples from the provided code:

### Optional Chaining with Object Properties:

```javascript
const mondayOpeningHours = restaurant.openingHours?.mon?.open ?? "Closed";
console.log(`Monday opens at ${mondayOpeningHours}`);
```

The ?. operator checks if openingHours exists and if mon exists within it.
If either is undefined, it returns undefined.
The ?? operator provides a default value ('Closed') if the result is null or undefined.

### Optional Chaining in a Loop:

```javascript
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const openingHour = restaurant.openingHours?.[day]?.open ?? "Closed";
  console.log(
    `${day.charAt(0).toUpperCase() + day.slice(1)} opens at ${openingHour}`
  );
}
```

The loop iterates over the days of the week.
openingHours?.[day]?.open checks if the openingHours and day properties exist.
The charAt(0).toUpperCase() + day.slice(1) part capitalizes the first letter of the day.

### Optional Chaining with Methods:

```javascript
restaurant.order?.(0, 1) ?? console.log("Method does not exist");
restaurant.orderRisotto?.() ?? console.log("Method does not exist");
```

order?.(0, 1) checks if the order method exists and calls it with arguments (0, 1).
orderRisotto?.() checks if the orderRisotto method exists and calls it.
The ?? operator handles cases where the method does not exist.

### Optional Chaining with Arrays:

```javascript
const users = [{ name: "Jonas", email: "hello@Jonas.io" }];

const firstName = users[0]?.name ?? "User array empty";
console.log(`First user's name: ${firstName}`);
```

users[0]?.name checks if the array exists and has an element at index 0 with a name property.
The ?? operator provides a default value ('User array empty') if the result is null or undefined.

Optional chaining simplifies the code and improves readability, especially when dealing with potentially non-existent properties or methods. It reduces the need for manual checks and makes the code more concise.

# Object methods :

## 1. Looping Over Object Property Names (Keys):

```javascript
const properties = Object.keys(openingHours);
for (const day of properties) {
  console.log(day);
}
```

### Object.keys():

Object.keys(openingHours) is a method that returns an array containing the property names (keys) of the openingHours object.
In this case, it would be an array ['Thu', 'Fri', 'Sat'].

### for...of Loop:

The for...of loop is used to iterate over the array of property names (properties).
For each iteration, the variable day is assigned the value of the current property name, and it's logged to the console.

## 2. Looping Over Object Property Values:

```javascript
const values = Object.values(openingHours);
for (const value of values) {
  console.log(value);
}
```

### Object.values():

Object.values(openingHours) returns an array containing the property values of the openingHours object.
In this case, it would be an array of objects representing the opening hours for each day.
for...of Loop:

## 3. Looping Over Object Entries (Keys and Values Together):

```javascript
const entries = Object.entries(openingHours);
for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}
```

## Object.entries():

Object.entries(openingHours) returns an array containing arrays, where each inner array represents a key-value pair (entry) from the openingHours object.
Each inner array has two elements: the key (property name) and the value (property value).

### for...of Loop with Destructuring:

The for...of loop is used to iterate over the array of entries (entries).
For each iteration, the variable [day, { open, close }] is assigned the array representing the current key-value pair.
Destructuring is used to extract the key (day) and the values within the inner object ({ open, close }).
The information is then logged to the console in a formatted string.

## Additional Notes:

Object.keys, Object.values, and Object.entries:

These methods provide a way to work with object properties as if they were arrays, making it easier to perform operations like looping.

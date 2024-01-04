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

# SETS

## 1. Introduction of Sets in JavaScript:

Sets are introduced as a new data structure in ECMAScript, specifically designed to store collections of unique values. Unlike arrays, sets do not allow duplicate values.

Example:

```javascript
// Creating a set named 'ordersSet' with unique values
const ordersSet = new Set([
  "pasta",
  "pizza",
  "pizza",
  "risotto",
  "pasta",
  "pizza",
]);
console.log(ordersSet); // Output: Set { 'pasta', 'pizza', 'risotto' }
```

In this example, the set ordersSet is created using the new Set constructor with an iterable (an array) containing some duplicate values. The resulting set only contains unique values.

## 2. Comparison with Arrays:

Sets are compared to arrays, emphasizing their similarity in appearance but highlighting key differences: uniqueness of elements and the lack of significance in the order of elements.

Example:

```javascript
// Creating a set and an array with duplicate values
const setExample = new Set(["a", "b", "a", "c"]);
const arrayExample = ["a", "b", "a", "c"];

console.log(setExample); // Output: Set { 'a', 'b', 'c' }
console.log(arrayExample); // Output: [ 'a', 'b', 'a', 'c' ]
```

Here, the set setExample and the array arrayExample are created with duplicate values. The set automatically removes duplicates, while the array retains them.

## 3. Set Methods and Properties:

### a. Size Property:

Sets have a size property, which returns the number of unique elements in the set.

Example:

```javascript
console.log(ordersSet.size); // Output: 3
```

The size property is used to determine the number of unique values in the ordersSet set.

### b. has Method:

The has method checks if a specific element is present in the set, returning a boolean.

Example:

```javascript
console.log(ordersSet.has("pizza")); // Output: true
console.log(ordersSet.has("bread")); // Output: false
```

The has method is used to check if 'pizza' and 'bread' are present in the ordersSet set.

### c. add Method:

The add method adds new elements to the set, ensuring uniqueness.

Example:

```javascript
ordersSet.add("garlic bread");
ordersSet.add("garlic bread"); // Duplicate, won't be added

console.log(ordersSet); // Output: Set { 'pasta', 'pizza', 'risotto', 'garlic bread' }
```

The add method is used to add 'garlic bread' to the set, and the duplicate is ignored.

### d. delete Method:

The delete method removes specific elements from the set.

Example:

```javascript
ordersSet.delete("risotto");
console.log(ordersSet); // Output: Set { 'pasta', 'pizza', 'garlic bread' }
```

The delete method is used to remove 'risotto' from the ordersSet set.

### e. clear Method:

The clear method removes all elements from the set.

Example:

```javascript
ordersSet.clear();

console.log(ordersSet); // Output: Set {}
```

The clear method is used to clear all elements from the ordersSet set.

## 4. Iterating Over Sets:

Sets are iterables, meaning they can be looped over using constructs like for...of.

Example:

```javascript
for (const order of ordersSet) {
  console.log(order);
}
// Output:
// pasta
// pizza
// garlic bread
```

The for...of loop is used to iterate over the elements in the ordersSet set.

## 5. Practical Use Case: Removing Duplicates from Arrays:

A practical use case for sets is presented, demonstrating how sets can be used to remove duplicate values from an array.

Example:

```javascript
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
const staffUnique = [...new Set(staff)];

console.log(staffUnique);
// Output: [ 'waiter', 'chef', 'manager' ]
```

The staff array contains duplicate values. By converting it to a set and then back to an array, duplicates are automatically removed.

## 6. Conclusion:

Sets are concluded to be useful for working with unique values, but arrays are emphasized for storing ordered data and manipulation using array methods.

Example:

```javascript
const uniqueLetters = new Set('Jonathan').size;
console.log(uniqueLetters); // Output: 7
Here, a set is used to count the unique letters in the string 'Jonathan'.
```

# MAPS

## 1. Introduction to Maps:

Maps are presented as a more versatile data structure than Sets. Unlike real-world maps for navigation, in JavaScript, Maps are used to associate values with keys, storing data in key-value pairs.

## 2. Key Differences Between Objects and Maps:

Maps are compared to objects, emphasizing a key distinction. While objects in JavaScript have keys that are always strings, Maps allow keys of any type, including objects, arrays, or other maps.

## 3. Creating and Populating a Map:

A restaurant map (rest) is created using the Map constructor, and entries are added using the set method. The keys and values can be of any data type.

Example:

```javascript
const rest = new Map();

rest
  .set("name", "Classico Italiano")
  .set(1, "Firenze, Italy")
  .set(2, "Lisbon, Portugal")
  .set("categories", ["Italian", "Pizzeria", "Vegetarian"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");
```

## 4. Chaining Set Method:

The set method is demonstrated to return the updated map, enabling method chaining. Categories are added as an array, followed by open and close times.

Example:

```javascript
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian'])
.set('open', 11)
.set('close', 23); 5. Retrieving Data from a Map:
```

The get method is introduced to retrieve values based on keys. Retrieving data is showcased using various keys, including Booleans and numbers.

Example:

```javascript
console.log(rest.get("open")); // Output: 11
console.log(rest.get(true)); // Output: 'We are open'
```

## 6. Dynamic Use of Map Keys:

A dynamic use case is demonstrated where the map is queried based on the current time to determine whether the restaurant is open or closed.

Example:

```javascript
const currentTime = 21;
console.log(
  rest.get(currentTime > rest.get("open") && currentTime < rest.get("close"))
); // Output: 'We are open'
```

## 7. Deleting Elements from a Map:

    Elements can be deleted from a map using the delete method, which takes the key as an argument.

Example:

```javascript
rest.delete(2); // Deleting the second location
```

## 8. Map Methods and Properties:

has Method: Checks if a map contains a certain key.
size Property: Returns the number of entries in the map.
clear Method: Removes all elements from the map.
Examples:

```javascript
console.log(rest.has("categories")); // Output: true
console.log(rest.size); // Output: 7
rest.clear();
```

## 9. Using Objects and Arrays as Map Keys:

Demonstration that objects and arrays can be used as keys in a map. However, it's highlighted that the actual object reference matters when retrieving values.

Example:

```javascript
const arrayKey = [1, 2];
rest.set(arrayKey, "Test");
console.log(rest.get([1, 2])); // Output: undefined
console.log(rest.get(arrayKey)); // Output: 'Test'
```

## 10. Advanced Example: Using DOM Elements as Map Keys:

A more advanced example shows using a DOM element as a key, associating it with a value in the map.

Example:

```javascript
const headingElement = document.querySelector("h1");
rest.set(headingElement, "Heading");
console.log(rest.get(headingElement)); // Output: 'Heading'
```

## 1. Creating a Map with alternate way:

A new map is created for a quiz application. Instead of using the set method, an array of arrays is passed directly to the Map constructor. Each inner array contains a key-value pair.

Example:

```javascript
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 😀"],
  [false, "Try again! ❌"],
]);
```

## 2. Converting Object to Map:

Demonstrates converting an object to a map using Object.entries. This shows an easy way to switch between object and map structures.

Example:

```javascript
const openingHours = {
  thu: { open: 12, close: 22 },
  fri: { open: 11, close: 23 },
  sat: { open: 0, close: 24 },
};

const hoursMap = new Map(Object.entries(openingHours));
```

## 3. Iterating Over a Map:

The for...of loop is used to iterate over the quiz map. The destructuring assignment is used to separate the key and value.

Example:

```javascript
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
```

## 4. Implementing a Simple Quiz:

    Uses a loop to ask the user for an answer and provides feedback based on whether the answer is correct or not. Boolean keys in the map help in determining success or failure.

Example:

```javascript
const userAnswer = Number(prompt("Your answer:"));
const correctAnswer = question.get("correct");

console.log(
  userAnswer === correctAnswer ? question.get(true) : question.get(false)
);
```

## 5. Converting Map to Array:

Shows how to convert a map back to an array using the spread operator.

Example:

```javascript
const questionArray = [...question];
console.log(questionArray);
```

# SUMMARY:

This part of the tutorial provides an overview of JavaScript's built-in data structures (arrays, objects, sets, and maps) and discusses when to choose each based on different use cases.

## 1. Sources of Data:

Program Source Code: Static data within the program.
User Interface: Data from user input or webpage content.
External Sources (Web API): Data fetched from other web applications.

## 2. Decision Factors for Data Structures:

Simple List of Values: Use arrays or sets.
Key-Value Pairs: Use objects or maps.

## 3. JSON Data Format:

Example:

```javascript
[
  { title: "Pasta Carbonara", publisher: "John" },
  { title: "Avocado Pizza", publisher: "Jane" },
  { title: "Vegan Burger", publisher: "Bob" },
];
```

Use Case: Data from Web API often comes in JSON format.
Object Key-Value Pairs: Essential for describing values.

## 4. Comparison of Data Structures:

### Arrays vs. Sets:

**Arrays:** For simple lists of ordered values with possible duplicates.
**Sets:** For unique values or scenarios where performance is crucial (faster operations).

## Objects vs. Maps:

**Objects:** Traditional key-value data structure, often used for simple key-value stores.
Suitable for describing values with keys.
**Advantages:** Easy to write, access, and use functions as values.
Good for JSON data and when functions are part of the values.
**Maps:** Better performance, keys can be of any data type, easy to iterate and compute size.
Suitable for simple key-value stores when keys are not strings.
Powerful when non-string keys are needed.

### When to Use Objects:

Use when easy readability and access are important.
For storing functions (methods) as values.
Common for JSON data.

### When to Use Maps:

Use when performance is crucial.
When keys can be of any data type.
Powerful for advanced use cases involving non-string keys.

## Conclusion:

**Arrays:** Lists of ordered values.
**Sets:** Collections of unique values or performance-intensive operations.
**Objects:** Traditional key-value data structure, easy to use and suitable for most scenarios.
**Maps:** High performance, flexible key-value data structure, suitable for non-string keys.

## 5. Additional Notes:

Mention of other data structures like WeakSets, WeakMaps, stacks, queues, linked lists, trees, and hash tables.
Awareness of more advanced data structures but not necessary for beginners.

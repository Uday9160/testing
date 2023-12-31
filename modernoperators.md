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

'use strict';
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPizza: function (mainIngredient, ...optional) {
    console.log(mainIngredient, optional);
  },
};

/*
////// BEGINNING: //////
// Destructuring Arrays:

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // destructuring assignment
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories; // skip the element
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// Switch two variables using destructuring:
// [main, secondary] equals the destructuring of this array: [secondary, main]:
[main, secondary] = [secondary, main]; // reassigning the values of the two variables
console.log(main, secondary, restaurant);

// Receive two return values from a function:
console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Array:
const nested = [2, 4, [5, 6]];
const [first, , second] = nested;
console.log(first, second);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Set default values:
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


// Destructuring Objects:

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// Object as an argument into the function:
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// Property names:
const { name, categories, openingHours } = restaurant;
console.log(name, openingHours, categories);
// We wanted the variable names to be different from property names :
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values:
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables:
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // wrap into parenthesis
console.log(a, b);

// Nested objects:
const {
  fri: { open: o, close },
} = hours;
console.log(o, close);

const {
  starterMenu: [c, d],
} = restaurant;
console.log(c, d);


// The Spread Operator
// Use to expand/unpack an array into individual elements
// Takes all the elements from the array and doesn't create a new variables. We can only use it in places where we would write values separated by commas.
// Multiple values separated by a comma are usually only expected when we pass arguments into a function or build a new array.
// Works on all iterables.
// Create only shallow copies.

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// Create shallow copies:
const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays or more together:
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables are most of the built in data structures, except objects.
// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

// Function:
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];
restaurant.orderPasta(...ingredients);

// ES2018 Objects:
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);
// Only shallow copy:
const copyRestaurant = { ...restaurant };
copyRestaurant.categories[0] = 0;
console.log('Original:', restaurant, 'Copy:', copyRestaurant);


// The Rest Pattern
// Does the opposite of The Spread Operator:
// Use to collect/pack multiple elements into an array
// Used where we would write variable names separated by commas and NOT values separated by commas.

// 1) Destructuring:

// Arrays:
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// The REST syntax collects all the array elements after the LAST variable, so it does not include any skipped elements:
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects:
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions:
// REST Parameters:
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('cheese', 'onion', 'olives', 'spinach');


// Short Circuiting

// Logical operators can use ANY data type, return ANY data type, do short-circuiting (short circuit evaluation):

// OR operator:
// Will return the first truthy value of all the operands, or the last value if all of them are falsy.

// If the first value(operand) is a truthy value, it will return that first value:
console.log(3 || 'Jonas');
console.log(true || 0);
// If the first value is a falsy value, it will return the second operand:
console.log('' || 'Jonas');
console.log(undefined || null);

// short circuit the entire evaluation and return value:
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello' because the first truthy value in this chain of OR operations

// Practical example:
const guestsTernary = restaurant.numGuests ? restaurant.categories : 10;
console.log(guestsTernary);

const guests = restaurant.numGuests || 0;
console.log(guests);

// AND operator:
// Will return the first falsy value of all the operands, or the last value if all of them truthy.

// If the first value is a truthy value, it will return the second operand:
console.log(7 && 'Jonas');
console.log(7 && undefined);
// If the first value is a falsy value, it will return the first operand:
console.log(0 && 'Jonas');

// short circuit the entire evaluation and return value:
console.log('Hello' && 23 && null && 'Jonas'); // null because the first falsy value

// Practical example:
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('bacon');


// Nullish Coalescing operator
// Nullish values: null and undefined (NOT 0 or '')
// 0 and '' are "not falsy" values and instead "truthy" values for this operator

// Problem:
// restaurant.numGuests = 0; // real value = falsy value => second operand
const guests = restaurant.numGuests || 'default value';
console.log(guests);

// Solution:
// Nullish values will short circuit the evaluation:
const guestsCorrect = restaurant.numGuests ?? 'default value';
console.log(guestsCorrect);
console.log(restaurant.numGuests);

// Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Giovanni Giorno',
};

const rest3 = {
  numGuests: 0,
};

// OR Assignment Operator:
// Assigns a value to a variable if that variable is currently falsy:
rest1.numGuests ||= 10; // rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests ||= 10; // rest2.numGuests = rest2.numGuests || 10;

// NULLISH Assignment Operator:
// Assigns a value to a variable if that variable is currently nullish:
// For the same problem with the value = 0:
rest3.numGuests ??= 10;

// AND Assignment Operator:
// Assigns a value to a variable if that variable is currently truthy:
rest2.owner &&= 'ANONYMOUS'; // rest2.owner = rest2.owner && 'ANONYMOUS'
// rest1.owner = rest1.owner && 'ANONYMOUS'; // as a result owner set to undefined
rest1.owner &&= 'ANONYMOUS';

console.log(rest1);
console.log(rest2);
console.log(rest3);


// Coding Challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);
// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// 5.
const {
  odds: { team1: teamOne, x: drawW, team2: teamTwo },
} = game;
console.log(teamOne, drawW, teamTwo);
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
// 6.
const printGoals = function (...goals) {
  for (let i = 0; i < goals.length; i++) {
    console.log(`${goals[i]} SCORE:${i + 1}`);
  }
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

const printGoalsScored = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoalsScored('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoalsScored(...game.scored);
// 7.
// game.odds.team1 > game.odds.team2 || console.log('Team1 is more likely to win');
team1 > team2 || console.log('Team1 is more likely to win');
team1 < team2 && console.log('Team1 is more likely to win');


// Looping Arrays:
// We can use the continue and break keywords in the for of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// Index:

// old way:
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
// new way:
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);


// ES6 OBJECT ENHANCEMENTS:

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  // ES6 compute property manes: [put any expression]
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurantCopy = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals:
  openingHours,
  // openingHours: openingHours,

  // ES6 method:
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPizza: function (mainIngredient, ...optional) {
    console.log(mainIngredient, optional);
  },
};


// Optional Chaining:

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon);

// WITH optional chaining
// If the property before question mark EXISTS(nullish concept), then the next property after it will be read. If NOT, then undefined will be returned.
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open} `);
}

// Methods
console.log(restaurant.order?.(0, 0) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 0) ?? 'Method does not exist');

// Arrays
const users = [
  {
    name: 'Jonas',
    email: 'hello@jonas.io',
  },
];

console.log(users[0]?.name ?? 'Users array empty');


// Loop over objects:

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Loping over property names or keys:
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;
for (const day of Object.keys(openingHours)) {
  console.log(day);
  openStr += `${day}, `;
}
console.log(openStr);

// Loping over values:
const values = Object.values(openingHours);
console.log(values);

// Loping over both together:
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/

// Coding Challenge #2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
console.log(odds);
let sum = 0;
for (const odd of odds) {
  sum += odd;

  // const average = odd === odds[odds.length - 1] && sum / 3;
  // console.log(average);
  // odd === odds[odds.length - 1] && console.log(sum / 3);

  if (odd === odds[odds.length - 1]) {
    const average = sum / odds.length;
    console.log(average);
  }
}
// sum /= odds.length;
// console.log(sum);

// 3.
for (const [team, score] of Object.entries(game.odds)) {
  // console.log(`Odd of victory ${team === 'x' ? 'draw' : game[team]}: ${score}`);
  console.log(`Odd of victory ${game[team] ?? 'draw'}: ${score}`);
}

console.log(`${'John'}`);

// BONUS

const arr = [1, 1, 2, 3, 4, 5, 3, 2, 2, 0, 0, 0];

const arrayCountValues = function (arr) {
  let el;
  const scorers = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    el = arr[i];
    if (scorers[el]) {
      scorers[el] += 1;
    } else {
      scorers[el] = 1;
    }
  }
  return console.log(scorers);
};

arrayCountValues(arr);
arrayCountValues(game.scored);

// const obj = {};
// obj[1] = 3;
// obj[1] = obj[1] + 1;
// console.log(obj);
// console.log(obj[1]);

// let arr = [1, 3, 4, 1, 1, 3, 4, 5];
// let count = {};

// for (let elem of arr) {
//   if (count[elem] === undefined) {
//     count[elem] = 1;
//   } else {
//     count[elem]++;
//   }
// }
// console.log(count);

// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurrence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

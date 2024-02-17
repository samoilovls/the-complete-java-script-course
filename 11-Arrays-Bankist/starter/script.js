'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Creating DOM elements:

const displayMovements = function (movements) {
  // innerHTML property
  // empty the entire container:
  // similar to textContent, the difference is that textContent returns the text itself, while innerHTML returns everything, including the HTML
  // containerMovements.textContent = '';
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // creating HTML templates:
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;

    // insertAdjacentHTML method
    // adding HTML onto webpage, attach HTML into container:
    // accepts two strings, the first is the position, second is element:
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

// Computing Usernames:

const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(letter => letter[0])
      .join('');
  });
};

createUsernames(accounts);

/*
const createUsernames = function (user) {
  const username = user
    .toLowerCase()
    .split(' ')
    .map(letter => letter.slice(0, 1))
    .join('');
  return username;
};

console.log(createUsernames('Steven Thomas Williams'));

const user = 'Steven Thomas Williams'; // stw
const username = user
  .toLowerCase()
  .split(' ')
  .map(letter => letter.slice(0, 1)) // letter => letter[0]
  .join('');
console.log(username);
*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*

// Simple Array Methods :

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE:
console.log(arr.slice(2)); // returns a new array
console.log(arr.slice(2, 4)); // the end parameter is not included in the output, so the length of the output array will be the END parameter minus the BEGINNING one.
console.log(arr.slice(-2)); // copy from the end
console.log(arr.slice(1, -2));

// Create shallow copy of the array:
console.log(arr.slice());
console.log([...arr]);

// SPLICE:
// mutates the original array
console.log(arr.splice(2)); // takes part of the original array and returns it
console.log(arr); // extracted elements are gone

// Delete elements from the array using splice:
arr.splice(-1);
console.log(arr);
// second parameter is called deleteCount:
// arr.splice(1, 2); number of elements we want to delete

// REVERSE:
// mutates the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); // mutate the original array

// CONCAT:
// doesn't mutate the original array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN:
console.log(letters.join('-')); // string

// The At method:

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

// getting the last element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));


// Looping Arrays :

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// forEach method
// we cannot use continue and break statements
// it does loop over the array and in each iteration it will execute callback function
// in each iteration it will pass in the current element of the array as an argument
// each time this callback function is called, it will receive the current el of the array as an argument:
// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ...
// in fact forEach passes in the current element, index and entire array that we are looping
// the order does matter: current element, index, array
movements.forEach(function (element, index, array) {
  if (element > 0) {
    console.log(`Movement ${index + 1}: You deposited ${element}`);
  } else console.log(`Movement ${index + 1}: You withdrew ${Math.abs(element)}`);
});


// forEach With Maps and Sets

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(currencies);
const currenciesArr = new Array(...currencies);
console.log(currenciesUnique);
console.log(currenciesArr);

const currenciesSet = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']); // we need to pass an Iterable
console.log(currenciesSet);

currenciesSet.forEach(function (value, _, set) {
  console.log(value, _, set);
});


// Coding Challenge #1

// Data 1
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
// Data 2
const dogsJulia1 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (arr1, arr2) {
  const arrCopy = arr1.slice(1, -2);
  // const arrCorrect = arr1.slice()
  // arrCorrect.splice(0,1)
  // arrCorrect.splice(-2);
  const arrConcat = arrCopy.concat(arr2);
  arrConcat.forEach(function (val, i) {
    typeof val === 'number' && val >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${val} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};
checkDogs(dogsJulia, dogsKate);
checkDogs(dogsJulia1, dogsKate2);


// Array Methods for Data Transformations:
// create new arrays based on transforming data from other arrays:

// the map method used to loop over arrays, it returns a new array containing the results of applying an operation on all original array elements
// it maps the values of the original array to a new array

// the filter method used to filter for elements in the original array which satisfy a certain condition
// it returns a new array containing the array elements that passed a specified condition

// the reduce method boils(reduces) all array elements down to one single value (e.g. adding all elements together), returns value

// the MAP

const eurToUsd = 1.1;
const movementsUSD = movements.map(function (value) {
  // in the callback function we need to return the value that we want the new array to have in the current position
  return value * eurToUsd;
});
console.log(movementsUSD);

// simplify with arrow functions
// .map(value =>)

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
// ({
// it's completely acceptable to have two return statements or even more as long as only one of them is executed:
// if (mov > 0) {
//   return `Movement ${i + 1}: You deposited ${mov}`;
// } else {
//   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
// }
// })

console.log(movementsDescriptions);

*/
// the FILTER

const deposits = movements.filter(function (value, i, arr) {
  // return a boolean value
  return value > 0;
});
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// the REDUCE
// the second parameter of the reduce method is the initial value of the accumulator in the first loop iteration
// In the callback function the first parameter is the accumulator

// const balance = movements.reduce(function (accumulator, value, i, arr) {
//   // return = updated accumulator
//   return accumulator + value;
// }, 0);
// console.log(balance);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let sum = 0;
for (const movement of movements) {
  sum += movement;
}
console.log(sum);

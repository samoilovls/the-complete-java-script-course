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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
});

*/

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

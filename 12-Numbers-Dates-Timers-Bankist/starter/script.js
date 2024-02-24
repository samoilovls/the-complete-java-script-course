'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-02-17T17:01:17.194Z',
    '2024-02-20T23:36:17.929Z',
    '2024-02-23T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

// Adding Dates
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'today';
  if (daysPassed === 1) return 'yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, '0');
    // const month = `${date.getMonth() + 1}`.padStart(2, '0');
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Internationalization API
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric', // 'long' , '2-digit'
      year: 'numeric',
      // weekday: 'long', // short , narrow
    };
    // get locale from the user's browser
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now); // locale string: language-country, options object

    // Create current date and time
    // day/month/year
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, '0');
    // const month = `${now.getMonth() + 1}`.padStart(2, '0');
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, '0');
    // const min = `${now.getMinutes()}`.padStart(2, '0');
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan Date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*

// Numbers:
// all numbers are represented internally as floating point numbers
// always as decimals
console.log(23 === 23.0); // true
// also, numbers are represented internally in a 64 base 2 format, means that numbers are always stored in a binary format: composed of zeros and ones.
// Base 10 - 0 to 9
// Binary is base 2 - 0 1
// In binary form it is hard to represent some fractions:
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// convert string to a number:
console.log(Number('23'));
console.log(+'23'); // plus operator

// Parsing
// parseInt with integers
// parseInt accepts a second argument, which is regex. The regex is the base of the numeral system we are using.
console.log(Number.parseInt('30px', 10)); // string needs to start with a number
// parseFloat for floating point numbers
console.log(Number.parseFloat('2.5rem')); // 2.5
console.log(Number.parseInt('2.5rem')); // 2

// These are global functions, we do not have to call them on Number, but this is the more traditional and old-school way of doing it.
// console.log(parseFloat('2.5rem')); also works
// In modern JS it is more encouraged to call these functions on the Number object. Number provides a namespace.

// Check if any value is Not a Number (NaN)
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(23 / 0)); // infinity is not a Nan - false

// Check if any value is a number (with floating point numbers)
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false

// Check for integer:
console.log(Number.isInteger(20)); // true


// Math and Rounding:

// Square root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
// Cubic root
console.log(8 ** (1 / 3));

// Get the max value, does type coercion
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
// Get the min value
console.log(Math.min(5, 18, 23, 11, 2));

// There are also constants on the Math object/namespace:
// calculate the area of a circle
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// random fn
console.log(Math.trunc(Math.random() * 6) + 1);

/////////////////////////////////////
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...(max - min + min)
console.log(randomInt(-10, -5)); // NOT REALLY WORK
/////////////////////////////////////

// Rounding integers
// do type coercion
console.log(Math.trunc(23.3)); // remove decimal part
// Round:
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.5)); // 24
// Round up:
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.5)); // 24
// Round down:
console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.5)); // 23

// trunc and floor with negative numbers
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding decimals
// toFixed returns string, works because of boxing: JS transforms primitive to a number object and back
console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35
console.log(+(2.345).toFixed(2)); // convert to number


// Remainder Operator:
// returns the remainder of a division
console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 8 = 2 * 3 + 1

// Check whether a certain number is even or odd
console.log(6 % 2); // 0 => even
console.log(6 / 2); // 6 = 3 * 2

console.log(7 % 2); // 1 => odd
console.log(7 / 2); // 7 = 3 * 2 + 1

const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // true

// Check if any number is divisible by any other number
// whenever the results of the remainder operator is zero, the first number is completely divisible by the second one.

//////////////////////////////////////////
// every Nth time
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // color every second row of the movements 0,2,4,6
    if (i % 2 === 0) row.style.backgroundColor = 'orange';
    // color every third 0,3,6
    if (i % 3 === 0) row.style.backgroundColor = 'brown';
  });
});


// Numeric Separators

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

// some restrictions:
const PI = 3.1415; // _3_._14__15_ not allowed
// converting strings with underscores to numbers does not work
console.log(Number('230_000')); // NaN
console.log(parseInt('230_000')); // only 230


// BigInt from ES2020
// all numbers are represented internally as 64 bits
// of these 64 bits only 53 are used to store the digits themselves, the rest are for storing the position of the decimal point and the sign
// if there are only 53 bits to store the number, there is a limit of how big numbers can be:
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(4838430248342043823408394839483204n);
console.log(BigInt(48384302)); // used with small numbers

// Operations
console.log(10000n + 10000n);
console.log(38423423048038348984093834830483904n * 100000000000000n);
// Math operations are not gonna work:
// console.log(Math.sqrt(16n));
// Not possible to mix BigInt with regular numbers
const huge = 20283949349348938493849n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions:
// comparison operators
console.log(20n > 15); // still works
console.log(20n === 20); // not works, JS does not do type coercion
console.log(20n == 20); // does type coercion
// the plus operator with strings, string concatenations
console.log(huge + ' is really big ');

// Divisions
console.log(10n / 3n); // 3n
console.log(10 / 3);


// Dates and times:

// Create a date
// new date constructor
const now = new Date(); // object
console.log(now);
// parse from a date string
console.log(new Date('Feb 23 2024 15:15:00'));
console.log(new Date('December 24, 2015')); // can be quite unreliable
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5)); // the month is zero based => 10 is november
console.log(new Date(2037, 10, 31)); // autocorrects the day

// we can pass the amount of milliseconds passed since the beginning of the Unix time, January 1, 1970
console.log(new Date(0));
// 3 days after
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // timestamp

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth()); // zero based
console.log(future.getDate()); // Day of the month
console.log(future.getDay()); // Day of the week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // timestamp is the milliseconds have passed since Jan 1 1970
console.log(new Date(2142246180000));
console.log(Date.now()); // current timestamp

// Set versions
future.setFullYear(2040);
console.log(future);

*/

// Operations with dates

// calculations
// whenever we attempt to convert a date to a number, the result is going to be the timestamp in milliseconds
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);
console.log(future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / 1000 / 60 / 60 / 24;
const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days1);

// if we need really precise calculations, we should use a date library like moment.js

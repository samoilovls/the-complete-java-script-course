'use strict';
/*

// Default Parameters
// ES6 function (parameter = any expression and here we can use the values of the other parameters that we set BEFORE it)

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 old way of setting default parameters:
  // numPassengers ||= 1;
  // price ||= 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
// Skip arguments that we want to leave as default when we called a function:
createBooking('LH123', undefined, 1000);



// How passing arguments works / How primitive types and reference types work in the context of functions
// JS does not have passing by reference, only passing by value.
// For objects, we do in fact pass IN a reference: the memory address of the object, however that reference itself is still a value. It's simply a value that contains a memory address. We pass a reference to the function, but we do not pass BY reference.
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  // You SHOULD NOT change the parameters of a function:
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 24739479284) {
    alert('Checked in');
    console.log(flightNum);
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(jonas);
checkIn(flight, jonas);


// Functions accepting Callback Functions:

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  // console.log(others);
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`); // functions can have properties and one of them is the name property.
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);


// Functions returning Functions:

// works because of closure
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// small challenge:
// write with arrow functions
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('Hi')('Jonas');


// Functions' Methods:
// Functions are just another "type" of objects
// First-Class Functions means that functions are simply values

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on a ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: this.iataCode + flightNum, name });
  },
};

lufthansa.book(249, 'Jonas');
lufthansa.book(635, 'Mike Smith');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; // possible because JS has first class functions

// Does NOT work
// book(23, 'Vlad');

// Set the this keyword explicitly/manually by three function's methods:

// Call method:
// immediately call the function
// The first argument is exactly what we want the this keyword to point to
book.call(eurowings, 23, 'Vlad');
console.log(eurowings.bookings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss.bookings);

// Apply method:
// does not receive a list of arguments after the this keyword
// instead it's gonna take an array of the arguments:
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
book.call(swiss, ...flightData);

// Bind method:
// DOES NOT immediately call the function
// instead it returns a new function where the this keyword is bound

// We need to use the book function for Eurowings all the time:
// book.call(eurowings, 23, 'Vlad');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
console.log(eurowings.bookings);

// Set in stone certain arguments, preset, predefined: Partial application
const bookEW50 = book.bind(eurowings, 50);
bookEW50('Jonas');
bookEW50('Martha');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// In an event handler function the this keyword always points to the element on which that handler is attached to:
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // we need to pass in a function here and NOT to call it

// Partial application
// means we can preset parameters
const addTax = (rate, value) => value + (value * rate) / 100;
console.log(addTax(10, 200));

const addVAT = addTax.bind(null, 23);
// const addVAT = value => value + (value * 23) / 100;
console.log(addVAT(200));

// Challenge

const addTaxRate = function (rate) {
  return function (value) {
    console.log(value + (value * rate) / 100);
  };
};
const VAT23 = addTaxRate(23);
VAT23(200);

*/

// Coding Challenge #1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

poll.displayResults = function (type = 'array') {
  if (type === 'array') {
    console.log(this.answers);
  } else if (type === 'string') {
    console.log(`Poll results are ${this.answers.join(', ')}.`);
  }
};

poll.registerNewAnswer = function () {
  let question = `${this.question}`;
  for (const option of this.options) {
    const enterOp = `
${option}`;
    // console.log(enterOp);
    question += enterOp;
  }
  // console.log(question);
  const finalStr =
    question +
    `
(Write option number)`;
  const answer = Number(prompt(finalStr));
  // console.log(answer, typeof answer);
  if (
    typeof answer === 'number' &&
    answer > -1 &&
    answer < this.answers.length
  ) {
    this.answers[answer]++;
    console.log('correct input');
  } else console.log('wrong input');
  // console.log(this.answers);

  this.displayResults();
  this.displayResults('string');

  // a();
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// a();
// const a = function () {
//   console.log('a');
// };

// poll.answers[-1] = 0;

poll.registerNewAnswerCourseSolution = function () {
  const input = Number(
    prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    )
  );
  const answer = -1;
  typeof answer === 'number' &&
    answer < this.answers.length &&
    this.answers[answer]++;
  console.log(this.answers);
  typeof answer === 'number' && answer < this.answers.length
    ? console.log('correct'.toUpperCase())
    : console.log('wrong'.toUpperCase());
};
// poll.registerNewAnswerCourseSolution();

// console.log(poll.answers);
// console.log(poll.answers[-1]);

// BONUS
const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: data1 });
poll.displayResults.call({ answers: data1 }, 'string');

poll.displayResults.call({ answers: data2 });
poll.displayResults.call({ answers: data2 }, 'string');

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

*/

// Functions returning Functions

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

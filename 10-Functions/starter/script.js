'use strict';

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

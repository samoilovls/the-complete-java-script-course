'use strict';

// Constructor functions
// creating objects programmatically, using a function which will also set the new object's prototype

// a constructor function is a completely normal function, the only difference is that we call a constructor function with the new operator.
// constructor functions always start with a capital letter
// an arrow function will not work as a function constructor

const Person = function (firstName, birthYear) {
  //  Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // You should never create a method inside of a constructor function
  //   this.calcAge = function () {
  //     return 2024 - this.birthYear;
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// What happens when we call a function with the new operator:
// 1. a new empty object is created
// 2. the function is called and in this function the this keyword will be set to this newly created object
// 3. this newly created object is linked to a prototype
// 4. the object that was created in the beginning is then automatically returned from the constructor function

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

'use strict';
/*
// Scoping:
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var teacher = true;
      // Creating NEW variable with the same name as outer scope's variable:
      const firstName = 'Steven'; // it is in the current block scope
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // Reassigning outer scope's variable:
      output = 'NEW OUTPUT!'; // manipulated an existing variable
    }
    // console.log(str); not accessible
    // add(2, 3); not accessible in strict mod (functions are block scoped)
    console.log(teacher); // var is a function scoped
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);


// Hoisting and TDZ:
// Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object. (during the creation phase of the execution context)
// let and const variables are placed in Temporal Dead Zone or TDZ, so we can't access the variables between the beginning of the scope and the place where the variables are declared.
// Variable:
console.log(me); // try to access a var variable before it's declared = undefined
// console.log(job); // Cannot access before initialization
// console.log(year); // Cannot access before initialization

var me = 'Jonas';
let job = 'teacher';
const year = 1991; 

// Functions:
console.log(addDecl(2, 3)); // 5
// function expressions and arrow functions' behavior depends if they were created using var or let/const:
// console.log(addExpr(2, 3)); // Cannot access before initialization
console.log(addArrow); // undefined
// console.log(addArrow(2, 3)); // addArrow is not a function: undefined(2,3)

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example:
console.log(numProducts); // falsy value
if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}


// Differences between var,let,const:
var x = 1; // we get a property of x: 1 on a global window object 
let y = 2;
const z = 3;

console.log(window.hasOwnProperty('x')); // true
console.log(window.hasOwnProperty('y')); // false
console.log(window.hasOwnProperty('z')); // false


// This keyword:
// this keyword or this variable is a special variable that is created for every execution context and therefore any function. Takes the value of (points to) the 'owner' of the function in which the this keyword is used.
// the value of the this keyword is NOT static. It depends on HOW the function is called, and its value is only assigned when the function is actually called.

// Four different ways functions can be called:
// 1. Method: this = object that is calling the method
const jonas = {
  name: 'Jonas',
  year: 1989,
  calcAge: function () {
    console.log(this);
    return 2037 - this.year;
  },
};
jonas.calcAge(); // 48

// 2. Simple function call: this = undefined (in strict mode. Otherwise this will point to the global object, which in case of the browser is the window object.)
// 3. Arrow functions: Don't get own. this = this keyword of the parent function or gets picked up from the outer lexical scope (lexical this keyword)
// 4. Event listener: this = DOM element that the handler is attached to

// this does NOT point to the function itself, and also NOT the its variable environment!

console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // method borrowing
matilda.calcAge();

const f = jonas.calcAge;
f(); // this = undefined

*/

// This keyword related to Regular functions and Arrow functions:

// var firstName = 'Matilda';
var x = 1; // Variables declared with var create a properties on a global window object
console.log(window.hasOwnProperty('x'));

// Checking whether an object has a certain property:
// console.log('firstName' in jonas);
// console.log(jonas.hasOwnProperty('firstName'));

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
    console.log(this);

    const isMillennial = function () {
      console.log(this); // undefined
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial(); // Cannot read properties of undefined
  },

  // Pre ES6 solution:
  calcAgeOld: function () {
    console.log(2037 - this.year);

    const self = this; // self or that
    console.log(self);

    const isMillennial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillennial();
  },

  // ES6 solution:
  calcAgeNew: function () {
    console.log(2037 - this.year);

    const isMillennial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial();
  },

  greet: () => {
    console.log(`Hey ${this.firstName}`);
    console.log(this); // window object
  },
};

jonas.greet();
console.log(this.firstName); // when we try to access a property that doesn't exist on a certain object, we get undefined

// jonas.calcAge();
jonas.calcAgeOld();
jonas.calcAgeNew();

// arguments keywords:

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments); // arguments is not defined
  return a + b;
};
addArrow(2, 5, 8);

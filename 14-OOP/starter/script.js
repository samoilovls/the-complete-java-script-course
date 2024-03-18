'use strict';
/*
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

// Prototypes
// Every function in JS automatically has a property called prototype.
// Every object that is created by a certain constructor function will get access to all the methods and properties that we define on the constructors prototype property.
Person.prototype.calcAge = function () {
  return 2024 - this.birthYear;
};

console.log(Person.prototype);
console.log(jonas.calcAge());

// Any object always has access to the methods and properties from its prototype.
// Person.prototype is not the prototype of Person, instead it is going to be used as the prototype of all the objects that are created with the Person constructor function.
console.log(jonas.__proto__); // the new operator: step number three creates __proto__ property and sets its value to the prototype property of the function
console.log(jonas.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(jonas)); // true
// .prototype of linked objects

// Properties
Person.prototype.species = 'Homo Sapiens';
// property is not directly in the object, it is not its own property. Own properties are declared directly on the object itself, not including the inherited properties.
console.log(jonas.hasOwnProperty('species')); // false
console.log(jonas.species);
console.log('species' in jonas); // including the inherited properties

// All objects in JS have a prototype.
// Person.prototype is also an object, and the prototype of Person.prototype is Object.prototype
// Object is the built-in object constructor function, and this function is called behind the scenes whenever we create an object literal:
// {} === new Object()

// Prototype chain is series of links between the objects, linked through prototypes.
// Object.prototype is usually the top of the prototype chain, which means that it's prototype is null.

// Prototypal Inheritance on Build-In Objects
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); // null

// to inspect the function:
console.dir(Person.prototype.constructor);

// Prototype of Arrays
const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array() === []
console.log(arr.__proto__); // object
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__); // Object.prototype

// Extending the prototype of a built-in object is not a good practice:
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
// The first reason is that the next version of JS might add a method with the same name, but it might work in a different way and will break your code.
// The second reason is when you work on a team of developers.


// Coding Challenge #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
console.log(car1, car2);

car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();


// ES6 Classes
// "Synthetic sugar" over constructor functions

// classes are special type of functions:
// class expression
// const PersonCl = class {}
// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods that we write in the class, outside of the constructor, will be added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode


// Setters and Getters
// assessor properties

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.at(-1);
    // return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account);
console.log(account.latest); // get
account.latest = 50; // set

// Classes also have getters and setters:
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName; // this code is going to execute the setter
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  // Set on prototype:
  get age() {
    return 2024 - this.birthYear;
  }

  // Data validation
  // Convention: when we have a setter which is trying to set a property that does already exist, we add an underscore: creating a new variable
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) {
      this._fullName = name; // create a new property name to avoid naming conflict
    }
  }
  get fullName() {
    return this._fullName;
  }
}
const walter = new PersonCl('Walter White', 1965);
console.log(walter.age);
console.log(walter);
// console.log(walter.fullName);

const smb = new PersonCl('Name', 1964);
console.log(smb); // does not have fullName property


// Static methods
// Methods that are attached to the constructor functions themselves and not to the prototype property of the constructor: Array.from() / Number.parseFloat()
// NOT inherited

// In Constructor function
const PersonConstr = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

PersonConstr.hey = function () {
  console.log('Hey');
  console.log(this); // entire constructor function
};

PersonConstr.hey();

// In Class
class SomeClass {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  static hey() {
    console.log('Hey');
    console.log(this); // entire class
  }
}

SomeClass.hey();

*/

// Object.create
// manually set the prototype of an object to any other object that we want

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

steven.init('Steven', 2002);
steven.calcAge();

console.log(steven);
console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
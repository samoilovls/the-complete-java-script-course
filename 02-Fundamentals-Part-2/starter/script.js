"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive!');

// reserved word:
// const interface = 'Audio';
// const private = 534;

// Functions:

function logger(){
    console.log('My name is Jonas');
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function Declaration:

// We can call them in a code before they are defined:
const age1 = calcAge1(1991);

function calcAge1(birthYear) { 
    // const age = 2037 - birthYear;
    // return age;
    return 2037 - birthYear;
}
// const age1 = calcAge1(1991);
console.log(age1);

// Function Expression:

// anonymous function()
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);

// Arrow Function:
// return happens implicitly
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// we need to return explicitly if there more than one line of code
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// Functions calling other functions:

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2,3));

// Reviewing:

function calcAge (birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement1 = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if(retirement>0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName}`);
        return -1;
    }
}

yearsUntilRetirement1(1991, 'Jonas');
console.log(yearsUntilRetirement1(1991, 'Jonas'));
// console.log(yearsUntilRetirement1(1950, 'Mike'));

// Coding Challenge 1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;

// Data 1
const avgDolphins = calcAverage(44,23,71);
const avgKoalas = calcAverage(65,54,49);

// Data 2
const avgDolphins2 = calcAverage(85,54,41);
const avgKoalas2 = calcAverage(23,34,27);

function checkWinner (avgDolphins,avgKoalas) {
    if(avgDolphins >= avgKoalas*2) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= avgDolphins*2) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        return `NO ONE WINS`
    }
}

console.log(checkWinner(avgDolphins,avgKoalas));
console.log(checkWinner(avgDolphins2,avgKoalas2)); 


// Arrays:

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// Literal syntax:
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// new Array() function:
const newYears = new Array(1991, 1984, 2000, 2020);
console.log(newYears);

console.log(friends[0]); // 0 based
console.log(friends[2]);

console.log(friends.length); // property, not 0 based
console.log(friends[friends.length-1]);

friends[2] = 'Jay'; // Array is not a primitive value , only primitive values are immutable
// But we can not replace the entire Array: friends = ['Bob', 'Alice']
console.log(friends);

const firstName = 'Lev';
const me = [firstName, 'Samoilov', 2023 - 2000, friends];
console.log(me);

// Exercise
const calcAge = function (birthYear){
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages);


// Basic Array methods:

const friends = ['Michael', 'Steven', 'Peter'];

const newLength = friends.push('Jay'); // add an element to the end of the array, returns length
console.log(friends);
console.log(newLength);

friends.unshift('John'); // add an element to the beginning of the array
console.log(friends);


friends.pop(); // remove the last element of the array, returns the removed element
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // remove the first element
console.log(friends);

console.log(friends.indexOf('Steven')); // return in which position a certain element is in the array

console.log(friends.includes('Bob')); // return true if the element is in the array or false / doesn't do type coercion

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}


// Coding Challenge 2

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill*15/100 : bill*20/100;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill*15/100 : bill*20/100;
}
const tip = calcTip(100);
console.log(tip);

const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips);

const calcTotal = function (bill,tip) {
    return bill + tip;
}
const total = [calcTotal(bills[0],tips[0]), calcTotal(bills[1],tips[1]), calcTotal(bills[2],tips[2])];

console.log(total);


function calcTip1 (bill) {
    return bill >= 50 && bill <= 300 ? bill*15/100 : bill*20/100;
}

const tips2 = [calcTip1(bills[0]),calcTip1(bills[1])];
console.log(tips2);

console.log(`${calcTip1(150)}`);


// Objects:

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael','Peter' ,'Steven']
];
console.log(jonasArray[4][1]);
const friends = jonasArray[4];
console.log(friends[1]);

// Objects Literal Syntax:
const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael','Peter' ,'Steven']
}

//  Retrieve data from objects:
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael','Peter' ,'Steven']
}
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']); // we can put any expression 

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Not enough information');
// }

// Add new properties to object:
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);
console.log(jonas.location);

// Challenge:
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// Object methods 

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael','Peter' ,'Steven'],
    hasDriversLicense: true,
    // First:
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    
    // Second:
    // calcAge: function () { 
    //     return 2037 - this.birthYear; // this variable or this keyword = to the object calling the method
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age; // not necessary
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);


// Second:
// console.log(jonas.calcAge()); // the object calling the method
// jonas.age = jonas.calcAge();
// console.log(jonas);

// First:
// console.log(jonas['calcAge'](1991));
// console.log(jonas.calcAge(jonas.birthYear));


// Challenge

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael','Peter' ,'Steven'],
    hasDriversLicense: true,
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age; // not necessary
    },
    // getSummary: function () {
    //     if(this.hasDriversLicense) {
    //         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has a driver's license`
    //     } else {
    //         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has no driver's license`
    //     }
    // }

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`; // WE CAN USE Conditional(Ternary) operator IN ${}
    }
};
// console.log(jonas.calcAge());
console.log(jonas.getSummary());
console.log(jonas.age);


// Challenge #3 

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
};

console.log(`${john.calcBMI() > mark.calcBMI() ? john.fullName : mark.fullName}'s BMI (${john.bmi > mark.bmi ? john.bmi : mark.bmi}) is higher than ${john.bmi > mark.bmi ? mark.fullName : john.fullName}'s BMI (${john.bmi > mark.bmi ? mark.bmi : john.bmi})`);


// Loop
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE
for(let rep = 1; rep <=10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael','Peter' ,'Steven'],
    true
];
const types = [];

for(let i = 0; i < jonasArray.length ; i++ ) {
    // Reading from array
    console.log(jonasArray[i], typeof jonasArray[i]);

    // Filling array
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}
console.log(jonasArray.length);
console.log(types);

const years = [1991,2007,1969,2020];
const ages = [];
for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break Loop
for(let i = 0; i < jonasArray.length ; i++ ) {
    if(typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}
for(let i = 0; i < jonasArray.length ; i++ ) {
    if(typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

// Loop over array backwards
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael','Peter' ,'Steven'],
    true
];
for(let i = jonasArray.length-1; i>=0 ; i--) {
    console.log(jonasArray[i]);
}

// Loop in loop
for(let exercise = 1; exercise <=3; exercise++ ) {
    console.log(`Starting exercise ${exercise}`);
    for(let rep = 1; rep<=5; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}


// While Loop

for(let rep = 1; rep <=10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while(rep <=10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++
}

let dice = Math.trunc(Math.random()*6) + 1;
while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6) + 1;
    if (dice ===6) console.log('finish');
}
*/

// Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
};
const calcTotal = function (bill) {
  return bill + calcTip(bill);
};
console.log(calcTotal(bills[0]));

for (let i = 0; i < bills.length; i++) {
  // const tip = calcTip(bills[i]);
  // tips.push(tip);
  // totals.push(tip + bills[i]);
  tips.push(calcTip(bills[i]));
  totals.push(calcTotal(bills[i]));
}
console.log(tips, totals);

// const calcTotal1 = function (bill,tip) {
//     return bill + tip;
// }
// console.log(calcTotal1(bills[0],calcTip(bills[0])));
// const calcTotal2 = function (bill) {
//     const calcTip1 = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill*15/100 : bill*20/100;
// }
// return bill + calcTip1(bill);
// }
// console.log(calcTotal2(bills[0]),calcTip1(bills[0])); // нет доступа к функции calcTip1

// BONUS
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // sum = arr[i] + sum;
  }
  return sum / arr.length;
};
console.log(calcAverage(totals)); // takes an array as an argument

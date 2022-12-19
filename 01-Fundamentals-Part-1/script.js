/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let firstName;
let firstNamePerson;
let first_name_person;
// reserved
let $function = 27;
let _new = 23;
let name = "Jonas";
let PI = 3.1415;

let javascriptIsFun = true;
console.log(javascriptIsFun);


// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

console.log(typeof javascriptIsFun);
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

let age = 30;
age = 31

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';
console.log(job);

lastName = 'Schmedtmann';
console.log(lastName);


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// console.log(25-10-5);

let x, y;
x = y = 25-10-5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


// Coding Challenge #1
// Data 1:
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
// Data 2:
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markMass2 / markHeight2 ** 2;
const johnBMI2 = johnMass2 / johnHeight2 ** 2;

const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markBMI2, johnBMI2, markHigherBMI2);


// Template Literals
const firstName = 'Jonas';
const job = 'Programmer';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!' ;
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

// Multiline string
console.log('String with \n\
multiple \n\
lines'); // before ES6

console.log(`String with
multiple
lines`);


const age = 15;
// Control structure
if(age>= 18) {
    console.log('Sarah can start driving licence');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2001;
let century;
if(birthYear <= 2000) {
 century = 20;
} else {
 century = 21;
}
console.log(century);

*/

// Coding Challenge #2

// Data 1:
const massMark= 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;

if(markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}) !`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}) !`);
}
// Data 2:
const massMarkNew = 95;
const heightMarkNew = 1.88;
const massJohnNew = 85;
const heightJohnNew = 1.76;

const markBMINew = massMarkNew / heightMarkNew ** 2;
const johnBMINew = massJohnNew / heightJohnNew ** 2;

if(markBMINew > johnBMINew) {
    console.log(`Mark's BMI (${markBMINew}) is higher than John's (${johnBMINew}) !`);
} else {
    console.log(`John's BMI (${johnBMINew}) is higher than Mark's (${markBMINew}) !`);
}

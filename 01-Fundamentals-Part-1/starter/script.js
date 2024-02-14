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


// The if else statement:
const age = 15;
// Control structure:
if(age>= 18) {
    console.log('Sarah can start driving licence');
} else {
    const yearsLeft = 18 - age;
    // Any variable that we declare inside of these blocks will not be accessible outside of the block!
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

// Any variable that we declare inside of these blocks will not be accessible outside of the block!
const birthYear = 2001;
let century;
if(birthYear <= 2000) {
 century = 20;
} else {
 century = 21;
}
console.log(century);



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


// Type conversion
const inputYear = '1991';
console.log(Number(inputYear)); // function
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));

// Type coercion
console.log(`I'm ` + 23 + ' years old');
console.log('23' - '10' - '3');
console.log('23' * '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n); // 10


// Truthy and Falsy values
// 5 falsy values: 0, '', undefined, null, Nan

let n; 
console.log(Boolean(0));
console.log(Boolean(n));
console.log(Boolean('Jonas'));
console.log(Boolean({})); // empty object  
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

let height;
height = 123;
if(height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

// Equality operators 
const age = 18;
if(age === 18) console.log('You just became an adult (strict)');

if(age == 18) console.log('You just became an adult (loose)'); // perform type coercion

// const age = '18';
// const ageNew = Number(age);
// if(ageNew === 18) console.log('You just became an adult (strict)');

// prompt function:
const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
if (favourite === 23) {
    console.log('Cool!');
} else if (favourite === 7) {
    console.log('WOW!');
} else if (favourite === 3) {
    console.log("Amazing!");
} else {
    console.log("NOPE");
}

if (favourite !== 23) console.log("Whay not 23?");


// Logical operators:
// const age = 16;
// const a = age >=20; // false
// const b = age < 30; // true
// console.log(!a, a); // NOT
// console.log(a&&b); // AND
// console.log(a||b); // OR
// console.log(!a&&b);
// console.log(a||!b);

const hasDriverLicense = true; // A
const hasGoodVision = true; // B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);


// if(hasDriverLicense && hasGoodVision) {
//     console.log('Sara is able to drive!');
// } else console.log('Someone else should drive...');

const isTired = true; // C
console.log(hasDriverLicense && hasGoodVision && isTired);


if(hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sara is able to drive!');
} else console.log('Someone else should drive...');


// Coding Challenge #3

const firstDolphinsScore = 96;
const secondDolphinsScore = 108;
const thirdDolphinsScore = 89;
const averageDolphinsScore = (firstDolphinsScore + secondDolphinsScore + thirdDolphinsScore) / 3;

const firstKoalasScore = 88;
const secondKoalasScore = 91;
const thirdKoalasScore = 110;
const averageKoalasScore = (firstKoalasScore + secondKoalasScore + thirdKoalasScore) / 3;

console.log(averageDolphinsScore,averageKoalasScore);

if(averageDolphinsScore > averageKoalasScore) {
    console.log('Dolphins is the winner of the competition!');
} else if (averageDolphinsScore === averageKoalasScore) {
    console.log('Draw!');
} else {
    console.log('Koalas is the winner of the competition!');
}

// Bonus 1

const firstDolphinsScoreOne = 97;
const secondDolphinsScoreOne = 112;
const thirdDolphinsScoreOne = 101;
const averageDolphinsScoreOne = (firstDolphinsScoreOne + secondDolphinsScoreOne + thirdDolphinsScoreOne) / 3;

const firstKoalasScoreOne = 109;
const secondKoalasScoreOne = 95;
const thirdKoalasScoreOne = 123;
const averageKoalasScoreOne = (firstKoalasScoreOne + secondKoalasScoreOne + thirdKoalasScoreOne) / 3;

console.log(averageDolphinsScoreOne,averageKoalasScoreOne);

const scoreRequirement = 100;
const minimumDolphinsScore = averageDolphinsScoreOne >= scoreRequirement;
const minimumKoalasScore = averageKoalasScoreOne >= scoreRequirement;

if (averageKoalasScoreOne>averageDolphinsScoreOne && minimumKoalasScore) {
    console.log('KOALAS WIN!');
} else if (averageDolphinsScoreOne>averageKoalasScoreOne && minimumDolphinsScore) {
    console.log('DOLPHINS WIN!');
} else {
    console.log('DRAW!');
}

// Bonus 2

const firstDolphinsScore2 = 97;
const secondDolphinsScore2 = 112;
const thirdDolphinsScore2 = 101;
const averageDolphinsScore2 = (firstDolphinsScore2 + secondDolphinsScore2 + thirdDolphinsScore2) / 3;

const firstKoalasScore2 = 109;
const secondKoalasScore2 = 95;
const thirdKoalasScore2 = 106;
const averageKoalasScore2 = (firstKoalasScore2 + secondKoalasScore2 + thirdKoalasScore2) / 3;

console.log(averageDolphinsScore2,averageKoalasScore2);

const scoreRequirement2 = 100;
const minimumDolphinsScore2 = averageDolphinsScore2 >= scoreRequirement2;
const minimumKoalasScore2 = averageKoalasScore2 >= scoreRequirement2;

if (averageKoalasScore2>averageDolphinsScore2&&minimumKoalasScore2) {
    console.log('KOALA WIN!');
} else if (averageDolphinsScore2>averageKoalasScore2&&minimumDolphinsScore2) {
    console.log('DOLPHINS WIN!');
} else if (averageDolphinsScore2===averageKoalasScore2&&minimumDolphinsScore2&&minimumKoalasScore2) {
    console.log('DRAW!');
} else {
    console.log('LOSE!');
}

// The switch statement
const day = 'friday';
switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a valid day!");
}

if(day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if(day === 'tuesday') {
    console.log('Prepare theory videos');
} else if(day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if(day === 'friday') {
    console.log('Record videos');
} else if(day === 'saturday' || day === 'sunday') {
    console.log("Enjoy the weekend");
} else {
    console.log("Not a valid day!");
}

// Conditional(Ternary) operator:
const age = 22;
// age >= 18 ? console.log('I like to drink beer') : console.log('I like to drink water');

const drink = age >= 18 ? 'beer' : 'water';
console.log(drink);

let drink1;
if (age >= 18) {
    drink1 = 'beer';
} else {
    drink1 = 'water';
}
console.log(drink1);

console.log(`I like to drink ${age >= 18 ? 'beer' : 'water'}`);

// Coding Challenge #4

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill*15/100 : bill*20/100;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/

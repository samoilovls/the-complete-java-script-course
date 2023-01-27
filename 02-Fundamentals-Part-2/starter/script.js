'use strict';
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
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

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

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array(1991, 1984, 2000, 2020);
// console.log(years);

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


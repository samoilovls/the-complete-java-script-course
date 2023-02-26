// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// Given am array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const temp = [];
const calcTempAmplitude = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') continue;
    temp.push(arr[i]);
  }
  const max = Math.max(...temp);
  const min = Math.min(...temp);
  //   let max = arr[0];
  //   let min = arr[0];
  //   for (let i = 0; i < arr.length; i++) {
  //     const curTemp = arr[i];
  //     if (typeof curTemp !== 'number') continue;
  //     if (curTemp > max) max = curTemp;
  //     if (curTemp < min) min = curTemp;
  //   }
  return max - min;
};
const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);
console.log(temp);

// let max = Math.max(...temp);
// console.log(max);

// const p = [35, 2, 65, 7, 8, 9, 12, 121, 33, 99];
// const test = function (t) {
//   return Math.max(...t);
// };
// console.log(test(p));

Array.prototype.max = function () {
  return Math.max(...this);
  //   return Math.max.apply(null, this);
};

Array.prototype.min = function () {
  //   return Math.min(...);
  //   return Math.min.apply(null, this);
};

// console.log(p.max());
// console.log(`Max value is: ${p.max()}
// Min value is: ${p.min()}`);

// function arrayMax(arr) {
//   return arr.reduce(function (p, v) {
//     return p > v ? p : v;
//   });
// }
// console.log(arrayMax(temp));

// let max = temp[0];
// let min = temp[0];
// for (let i = 1; i < temp.length; ++i) {
//   if (temp[i] > max) {
//     max = temp[i];
//   } else if (temp[i] < min) {
//     min = temp[i];
//   }
// }
// console.log(max, min);

// PROBLEM 2:
// Function should now receive 2 arrays of temperatures
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2); // объединяет оба массива

const calcTempAmplitudeNew = function (t1, t2) {
  const arr = t1.concat(t2);
  console.log(arr);

  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const curTemp = arr[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

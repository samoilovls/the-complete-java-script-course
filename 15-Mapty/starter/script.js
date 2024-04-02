'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Geolocation API
// this function takes as an input two callback functions: the first one will be called on success, whenever the browser successfully got the coordinates, and the second is the error.
navigator.geolocation.getCurrentPosition(
  function (position) {
    // console.log(position);
    // const latitude = position.coords.latitude;
    // const longitude = position.coords.longitude;
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.ru/maps/@${latitude},${longitude}`);
    console.log(latitude, longitude);
  },
  function () {
    alert('Could not get your position');
  }
);

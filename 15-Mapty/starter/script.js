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
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // console.log(position);
      // const latitude = position.coords.latitude;
      // const longitude = position.coords.longitude;
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.ru/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];

      const map = L.map('map').setView(coords, 13);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    },
    function () {
      alert('Could not get your position');
    }
  );
}

// Any variable that is global in any script will be available to all the other scripts as long as they appear after that script:
// console.log(firstName);

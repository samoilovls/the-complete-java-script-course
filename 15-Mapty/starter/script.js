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

let map, mapEvent;

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

      // Leaflet Library:
      map = L.map('map').setView(coords, 13);
      // console.log(map);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // leaflet event listener
      map.on('click', function (mapE) {
        mapEvent = mapE;

        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },
    function () {
      alert('Could not get your position');
    }
  );
}

const clearInputs = function () {
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // Display marker:

  const { lat, lng } = mapEvent.latlng;

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Workout')
    .openPopup();

  clearInputs();
});

inputType.addEventListener('change', function () {
  inputElevation.parentElement.classList.toggle('form__row--hidden');
  inputCadence.parentElement.classList.toggle('form__row--hidden');
});

// Any variable that is global in any script will be available to all the other scripts as long as they appear after that script:
// console.log(firstName);

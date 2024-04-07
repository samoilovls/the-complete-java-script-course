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

class Workout {
  date = new Date();
  id = String(Date.now()).slice(-10);
  // id = String(this.date.getTime()).slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
    this.calcSpeed();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 20, 178);
// const cyc1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cyc1);

class App {
  workouts = [];
  #map;
  #mapEvent;

  clearInputs = function () {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    inputDistance.blur();
    inputDuration.blur();
    inputCadence.blur();
    inputElevation.blur();
  };

  constructor() {
    this.#getPosition();

    form.addEventListener('submit', this.#newWorkout.bind(this));

    inputType.addEventListener('change', this.#toggleInput); //.bind(this));
  }

  #getPosition() {
    console.log(this);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.#loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
    }
  }

  #loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const coords = [latitude, longitude];

    // Leaflet Library:

    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // leaflet event listener
    this.#map.on('click', this.#showForm.bind(this));
  }

  #showForm(mapE) {
    // click on map

    this.#mapEvent = mapE;

    form.classList.remove('hidden');
    inputDistance.focus();
  }

  #toggleInput() {
    // change input

    inputElevation.parentElement.classList.toggle('form__row--hidden');
    inputCadence.parentElement.classList.toggle('form__row--hidden');
  }

  #newWorkout(e) {
    // submit form
    // create new child objects
    // stored in workouts array

    e.preventDefault();
    // Display marker:

    const { lat, lng } = this.#mapEvent.latlng;

    L.marker([lat, lng])
      .addTo(this.#map)
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

    this.clearInputs();
  }

  // _someMethod() {}
}

const app = new App();

// console.log(app.workouts);
// console.log(app.__proto__);
// console.log(App.prototype);

/*
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
*/

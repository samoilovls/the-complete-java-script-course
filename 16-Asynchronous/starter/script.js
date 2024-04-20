'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Asynchronous JavaScript, AJAX and APIs:

// Synchronous code is executed line by line.
// Each line of code waits for previous line to finish.
// Long-running operations block code execution.
// alert blocks synchronous code

// Asynchronous code is executed after a task that runs in the "background" finishes.
// Asynchronous code is non-blocking.
// Execution doesn't wait for an asynchronous task to finish its work.

// AJAX - Asynchronous JavaScript And XML: Allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically.(without reloading the page)
// With AJAX, we can do an HTTP request to the server, and the server will then set back a response containing requested data. All this happens asynchronously in the background.

// Web server usually contains a web API
// API - Application Programming Interface: Piece of software that can be used by another piece of software, in order to allow applications to talk to each other and exchange information.

// "Online" API
// is an application running on a web server, which receives requests for data, retrieves this data from some database, and sends data back as response.

// We can build our own Web APIs, but that requires back-end development with servers and databases (e.g with node.js) or use 3rd-party APIs.

// API data formats
// XML is a data format
// These days no API uses XML data anymore
// Most APIs these days use the JSON data format

///////////////////////////////////////

/*
// AJAX Call:

const getCountryData = function (country) {
  // XMLHttpRequest:
  const request = new XMLHttpRequest();
  // (type of request, str with URL)
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    console.log(this.responseText); // JSON str

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
      <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
      </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('russia');

// if we want requests to be made in a specific, predefined order, we have to chain the requests:

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
      </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX call 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    console.log(this.responseText); // JSON str

    const [data] = JSON.parse(this.responseText); // array
    console.log(data);

    // Render 1
    renderCountry(data);

    // Get neighbour country
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    // AJAX call 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      console.log(this.responseText);

      const data = JSON.parse(this.responseText); // obj
      console.log(data);

      // Render 2
      renderCountry(data, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');

// Callback hell
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

*/

// Promises and the Fetch API
// Promises are an ES6 feature
// Promise is an obj that is used as a placeholder for the future result of an asynchronous operation.
// We no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results
// Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations - escaping callback hell

// Promises are time sensitive, so they can be in different states:
// The life cycle of a promise:
// Promise is pending, this is before any value resulting from the asynchronous task is available. During this time, the asynchronous task is still doing its work in the background.
// Then when the task finishes, the promise is settled and there are two types of settled promises: fulfilled and rejected.
// We are able to handle these different states in our code.
// Promise is only settled once. The state will remain unchanged forever.
// These different states are relevant and useful when we use a promise to get a result - to consume a promise.
// We consume a promise when we already have a promise, e.g. the promise that was returned from the fetch function.
// In order for a promise to exist in the first place, it must be built.
// Fetch function builds the promise and returns it for us to consume.

// Modern way of making AJAX calls:
// can take in an obj of options
const request = fetch(`https://restcountries.com/v2/name/portugal`);
console.log(request);

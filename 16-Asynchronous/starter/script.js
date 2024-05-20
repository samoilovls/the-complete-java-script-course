'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    // console.log(response);
    if (!response.ok) throw new Error(`${errorMsg}: ${response.status}`);
    // `Country not found: ${response.status}`

    return response.json();
  });
};

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
// immediately return a promise
const request = fetch(`https://restcountries.com/v2/name/portugal`);
console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    // Consuming Promises:
    .then(function (response) {
      console.log(response);
      // in order to be able to read the data from the body, we need to call the json method on the response. Json is a method that is available on all responses of the fetch method. Json is an asynchronous function, and it will also return a new promise:
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};

getCountryData('portugal');


// Chaining Promises

// Flat chain of promises:
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];

      if (!neighbour) return; // this is NOT going to work

      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);

      // .then method always returns a promise, no matter if we actually return anything or not. But if we do return a value, that value will become the fulfillment value of the return promise:
      // return 23; // fulfilled value
    })
    // .then(data => alert(data)) // 23
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};

getCountryData('portugal');


// Handling Rejected Promises
// the fetch promise only rejects when there is no internet connection, with other errors it still will be fulfilled

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(
      response => response.json()
      // ,err => alert(err) // second callback function will be called for the rejected promise
    )
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];

      if (!neighbour) return; // this is NOT going to work

      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    // handle all the errors globally:
    .catch(err => {
      console.error(err);
      renderError(err.message); // JS object
    })
    // finally method: callback function will always be called whatever happens with the promise: fulfilled or rejected
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});


// Throwing Errors Manually
// throw keyword will immediately terminate the current function. The effect of creating and throwing an error in any of then methods is that the promise will immediately reject.
// any error that happens in any then handler will immediately terminate then handler
// any error will cause any promise to reject

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    console.log(response);

    if (!response.ok) throw new Error(`${errorMsg}: ${response.status}`);
    // `Country not found: ${response.status}`

    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      // const neighbour = 'smth';
      // console.log(neighbour);
      // console.log(`https://restcountries.com/v2/alpha/${neighbour}`);

      if (!neighbour) throw new Error('No neighbour found');

      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Neighbour not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(err);
      renderError(err.message);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
// getCountryData('australia');

//////////////////////////////////////////////
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found: ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);

//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'smth';

//       if (!neighbour) return; // this is NOT going to work

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       response.json();
//       if (!response.ok)
//         throw new Error(`Country not found: ${response.status}`);
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(err);
//       renderError(err.message);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
//////////////////////////////////////////////


// Coding Challenge #1

const whereAmI = function (lat, lng) {
  // fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
  fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
  )
    .then(res => {
      console.log(res);
      if (!res.ok) throw new Error(`${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.address.city}, ${data.address.country}`);
      getCountryData(data.address.country);
    })
    .catch(err => {
      console.error(err);
    });
};

whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);


// Asynchronous Behind the Scenes: The Event Loop

// Everything related to the DOM is not part of JavaScript, but of the WEB APIs. The asynchronous tasks related to the DOM will run in the WEB APIs environment of the browser: timers, AJAX calls and all other asynchronous tasks.
// To do smth we listen to the events: attach an event listener means to register callback in the WEB APIs environment, callback will stay there until the event is emitted. When the event is emitted, the callback for this event is put into callback queue.

// Callback queue is an ordered list of tasks, of all the callback functions that are in line to be executed. It affects on the execution time of the timers.

// The event loop looks into the call stack and determines whether it's empty or not(except for the global execution context). If the stack is empty, which means there's currently no code being executed, it will take the first callback from the callback queue and put it on the call stack to be executed. And this is called an event loop tick.

// Callbacks related to promises do not go into the callback queue. Instead, callbacks of promises have a special queue called microtasks queue. Microtasks queue has priority over the callback queue. So, at the end of an event loop tick, after a callback has been taken from the callback queue, the event loop will check if there're any callbacks in the microtasks queue. And if there are, it will run all of them before it will run any more callbacks from the callback queue.

console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
// build a promise that resolves immediately:
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Test end');


// Building a Simple Promise
// the promise constructor takes one argument: executor function
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You Win');
    } else {
      reject(new Error('You Lose'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    // Here we can run any code that we want to be executed after two seconds
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

// Create a fulfilled or a rejected promise immediately
Promise.resolve('Fulfilled').then(x => console.log(x));
Promise.reject('Rejected').catch(x => console.error(x));


// Promisifying the Geolocation API

navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.error(err)
);

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then(res => console.log(res))
  .catch(err => console.log(err));

//////////////////////////////////////
const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      console.log(lat, lng);
      return fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
    })
    .then(res => {
      console.log(res);
      if (!res.ok) throw new Error(`${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.address.city}, ${data.address.country}`);
      getCountryData(data.address.country);
    })
    .catch(err => {
      console.error(err);
    });
};

whereAmI();


// Coding Challenge #2
// load img => displayed img => after 2 sec it disappears => sec img load => displayed => disappears

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      console.log(this);
      // this.classList.add('images');
      document.querySelector('div.images').append(this);
      resolve(this);
    });
    img.addEventListener(
      'error',
      reject.bind(null, new Error('load has failed'))
    );
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(el => {
    currentImg = el;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(el => {
    currentImg = el;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));


// Consuming Promises: Async Await

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// async function
// async function always returns a promise
const whereAmI = async function () {
  const {
    coords: { latitude: lat, longitude: lng },
  } = await getPosition();
  const resPosition = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
  );
  const dataPosition = await resPosition.json();
  console.log(dataPosition);
  console.log(
    `You are in ${dataPosition.address.city}, ${dataPosition.address.country}`
  );

  // await promise
  // await will stop the code execution at this point of the function until the promise is fulfilled
  // as soon as promise is resolved, the value of this whole await expression is going to be the resolved value of the promise

  // async await is a syntactic sugar over the then method:
  // fetch(`https://restcountries.com/v2/name/${country}`).then(res =>
  //   console.log(res)
  // );
  const res = await fetch(
    `https://restcountries.com/v2/name/${dataPosition.address.country}`
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};
whereAmI();
console.log('FIRST');


// Error Handling: try...catch statement
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   console.error(err);
// }

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Getting current position
    const {
      coords: { latitude: lat, longitude: lng },
    } = await getPosition();

    // Reverse geocoding
    const resPos = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );
    if (!resPos.ok) throw new Error(`${resPos.status}`);
    const dataPos = await resPos.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataPos.address.country}`
    );
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json();
    renderCountry(data[0]);

    // Returning Values from Async Functions
    // even though there is an error in async function, returned promise is still fulfilled
    // to fix that we need to rethrow error
    return `You are in ${dataPos.address.country}`;
  } catch (err) {
    console.error(err);
    renderError(err.message);

    // Reject promise returned from async function
    throw err;
  }
};

console.log('1: Will get location');

whereAmI()
  .then(res => console.log(`2: ${res}`))
  .catch(err => console.error(`2: ${err.message}`))
  .finally(() => console.log('3: Finished getting location'));

// IIFE
(async function () {
  try {
    const res = await whereAmI();
    console.log(`2: ${res}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  // outside of the try...catch block: always gonna be executed
  console.log('3: Finished getting location');
})();

*/

// Running Promises in Parallel

const getThreeCountries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    // Promise.all combinator function: takes in an array of promises and returns a new promise array
    // if one of the promises rejects, the whole Promise.all rejects as well
    // work with then as well
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data);
    console.log(data.map(d => d[0].capital));
  } catch (error) {
    console.error(error);
  }
};

getThreeCountries('portugal', 'canada', 'tanzania');

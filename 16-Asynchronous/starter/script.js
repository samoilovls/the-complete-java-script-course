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

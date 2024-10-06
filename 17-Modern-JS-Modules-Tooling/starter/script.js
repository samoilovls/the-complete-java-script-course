// Native JS ES6 built-in module system:
// Modules are stored in files, exactly one module per file

// ES6 Modules vs Scripts:
// Top-level variables: Scoped to the module (variables are private) vs Global
// ES6 Modules are always executed in a strict mode while Scripts are executed in a "sloppy" mode by default
// The this keyword is always undefined at the top-level while in Scripts it points at the window object
// We can export and import values between Modules with ES6 syntax

// We can not access anything from a module in the console, because this is basically the global scope

// Imports and Exports can only happen at the top-level !
// Imports are hoisted !
// Importing values is always the first thing that happens in a module.

// In order to link a module to an HTML file, we need to use the script tag with the type attribute set to module <script type="module">

// Downloading the module files automatically happens in an asynchronous way. This is true for a module loaded from HTML as well as for modules are loaded by importing one module into another, using the import syntax.
// The importing operation itself happens synchronously.

// Process of importing modules:

// Importing modules happens before the code in the main module is executed.
// Modules are imported synchronously, only after all imported modules have been downloaded and executed, the main module will be executed.

// 1.Parsing Main Module
// 2.Imports are hoisted.
// 3.Downloading the modules
// 4.After a module arrives, it's also parsed and the module's exports are linked to the imports in the main module. And this connection is a life connection, so exported values are not copied to imports, the import is basically a reference to the exported value.
// 5.The code in the imported modules is executed.
// 6.Executing Main Module

//////////////////////////////////////////////////////////////////////////
// Import a module without any value
// import './shoppingCart.js';
// VS Code omits the .js, because ES modules also work without the extension

console.log('Importing module');
// console.log(shippingCost); shippingCost is not defined

/*

// Named Imports
// We can change the name of imports as well
// import { addToCart, totalPrice as price, quantity } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price, quantity);

// We can import all the exports of a module at the same time
// this will create a namespace for all of the values, exported from module
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Default Imports
import add from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);
// Imports are a life connection to Exports:
import { cart } from './shoppingCart.js';
console.log(cart); // not empty array

// Mix Default and Named Imports in one statement, should not use it
// import add, { addToCart, totalPrice as price, quantity } from './shoppingCart.js';

// ES2022 Top-Level await
// We can use the await keyword outside of async functions in modules
// This blocks the execution of the entire module now
console.log('Start fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('End');

// Real World Example

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = await getLastPost();
console.log(lastPost);

// Not very clean
// const lastPost = getLastPost();
// lastPost.then(last => console.log(last));

// If one module imports a module which has a top-level await, then the importing module will wait for the imported module to finish the blocking code.


// The Module Pattern
// used to be used before in order to implement modules in JS
// main goal is to encapsulate functionality to have private data and to expose public API
// Assign the result of IIFE to a new variable:
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
    console.log(cart);
  };
  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2.cart);
console.log(ShoppingCart2);


// Not Native JS Module Systems

// AMD Modules

// CommonJS Modules
// Have been used in Node.js for almost all of its existence
// The consequence of this is that almost all the modules in the npm repository still use the CommonJS module system.

// This is not going to work in the browser, but it would work in Node.js
// export is an important object in Node.js
export.addToCart =  function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (shipping cost is {shippingCost})`
  );
};

// Import
const { addToCart } = require('./shoppingCart.js');

*/

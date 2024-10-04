// Blocking code:

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log('Finish fetching');

// Exporting module
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

// In ES modules there are two types of exports:
// exports always need to happen in top level code

// Named Exports
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
  console.log(cart);
};
// Export multiple things using Named Exports
const totalPrice = 237;
const totalQuantity = 23;

// We can change the name of exports as well
export { totalPrice, totalQuantity as quantity };

// Default Exports
// Use when we only want to export one thing per module
// Export the value itself
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
  console.log(cart);
}

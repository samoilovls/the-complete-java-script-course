'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnShowModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnShowModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Implementing Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

btnScrollTo.addEventListener('click', () =>
  section1.scrollIntoView({ behavior: 'smooth' })
);

// Implementing page navigation
// const links = document.querySelectorAll('.nav__link');
// links.forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     const section = document.querySelector(id);
//     console.log(section);
//     section.scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Adding one big event handler to the parent element is more efficient, than attaching the exact same event handler to multiple elements.

// Event Delegation:
// add the event listener to a common parent element of all the elements that we are interested in, and determine what element originated the event
const linksContainer = document.querySelector('.nav__links');
linksContainer.addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  if (
    e.target.classList.contains('nav__link') &&
    !e.target.classList.contains('nav__link--btn')
  ) {
    const id = e.target.getAttribute('href');
    const section = document.querySelector(id);
    // console.log('CONTAINER:', e.target, e.currentTarget, id, section);
    section?.scrollIntoView({ behavior: 'smooth' });
  }
});
// Important use case of event delegation is when we are working with elements that are not yet on the page on runtime, that are added dynamically while using the application. It's not possible to add event handlers on to elements that do not exist.

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// LECTURES
/*
///////////////////////////////////////
// Selecting, Creating, and Deleting Elements:

// Selecting elements
console.log(document.documentElement); // DOM element
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);
document.getElementById('section--1');

// HTMLCollection is a life collection, if the DOM changes then the collection is also immediately updated automatically:
// The same does not happen with a NodeList, it does not update itself
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div'); // DOM object
// It is not yet anywhere in the DOM, but we can do smth on it:
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality.';
message.innerHTML =
  'We use cookies for improved functionality. <button class="btn btn--close-cookie">OK</button>';
// Now we need to manually insert it into the DOM:
header.append(message); // adds the element as the last child

// We can use prepend and append methods not only to insert elements, but also to move them, because a DOM element is unique.
// header.prepend(message); // adds the element as the first child

// If we want to insert multiple copies of the same element, we have to first copy the element:
// header.append(message.cloneNode(true)); // true means that all the child elements will also be copied

// adds the element as a sibling:
// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    // before the remove method existed we could only remove child elements:
    // The way of moving up and down in the DOM tree like selecting the parentElement is called DOM traversing:
    message.parentElement.removeChild(message); // move up in a DOM tree
  });

 
// Styles, Attributes and Classes:

// Styles
// these styles are set as inline styles, directly in the DOM:
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
// reading styles using the style property only works for inline styles that we set ourselves also using the style property:
console.log(message.style.backgroundColor);

// If we want to get the styles:
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 23 + 'px';

/////////////////////////////////////////
// CSS custom properties or CSS variables

document.documentElement.style.setProperty('--color-primary', 'yellow');

// Attributes
const logo = document.querySelector('.nav__logo');
const link = document.querySelector('.nav__link--btn');
// read
console.log(logo.alt);
console.log(logo.className);
console.log(logo.src); // absolute URL
console.log(logo.getAttribute('src')); // relative URL
console.log(link.href);
console.log(link.getAttribute('href'));
// set
logo.alt = 'Minimalistic logo';

// Non-standard
console.log(logo.designer); // does not work like this
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

// Data attributes
// are stored in the dataset object
// use when we need to store data in the user interface, basically in the HTML code
console.log(logo.dataset.versionNumber); // camelCase

// Classes
// logo.classList.add('c','j'); can add multiple classes by passing in multiple values
// logo.classList.remove('c','j');
// logo.classList.toggle();
// logo.classList.contains();

// Don't use this, because it will override all the existing classes:
// logo.className = 'jonas'; set a class


// Implementing Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

btnScrollTo.addEventListener('click', function (e) {
  // get the coordinates of the element that we want to scroll to:
  const s1coords = section1.getBoundingClientRect();
  console.log('Section1 coordinates:', s1coords);
  // get rectangle for the button:
  // e.target is the element that was clicked
  // getBoundingClientRect() is relative to visible view port
  console.log('BtnScroll coordinates:', e.target.getBoundingClientRect());

  // get the current scroll position:
  console.log('Current scroll (X/Y):', window.pageXOffset, window.pageYOffset);
  // read the height and width of the view port:
  console.log(
    'height/width of viewport:',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // first argument is the left position, second one is a top
  // s1coords.top is relative to the viewport, but not to the document - to the top of the page
  // the absolute position of the element relative to the document:
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // Old school way:
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Modern:
  section1.scrollIntoView({ behavior: 'smooth' });
});


// Types of Events and Event Handlers:
// an event is a signal that is generated by a certain node
// no matter if we handle a certain event or not, that event will always happen

const h1 = document.querySelector('h1');
// Listen for event only once:
const alertH1 = function () {
  alert('addEventListener');
  // we can remove an event handler
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// addEventListener is better, because it allows us to add multiple event listeners to the same event, while if we do the same with on-property, it will simply override the function

// on-event property:
// h1.onmouseenter = function () {
//   alert('onmouseenter');
// };


// Event Propagation: Bubbling phase and Capturing phase:

// Event is generated at the root of the document.
// And from there the capturing phase happens, where the event travels all the way down from the document root to the target element, during this the event will pass through every single parent element of the target el.
// As soon as the event reaches the target, the target phase begins, where events can be handled right at the target. We do that with event listeners: As soon as the event occurs, it runs the attached callback function.
// After reaching the target, the event travels back to the top, to the document root, in the bubbling phase. Events bubble up from the target to the document root. And just like in the capturing phase, the event passes through all its parent elements.
// Bubbling phase: It's as if the event also happened in each of the parent elements. As the event bubbles through a parent element, it's as if the event had happened right in that very element. If we attach the same event listener also to the parent element, event will occur for the parent element as well. So, we would have handled the exact same event twice, once at it's target and once at one of it's parent elements.
// By default events can only be handled in the target and in the bubbling phase. However, we can set up event listeners in a way that they listen to events in the capturing phase instead.

// Not all types of events have a capturing and bubbling phase, some of them are created right on the target element and we can only handle them there.

// Event Propagation in Practice:

// rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  // target is where the event originated, where the event first happened, this is NOT the element on which the handler is attached.
  // currentTarget is the element on which the handler is attached.
  // this points to the element on which the handler is attached to.
  console.log('LINK:', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation:
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER:', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV:', e.target, e.currentTarget);
  }
  // true // use capture parameter
);

*/

// DOM Traversing:
// is walking through the DOM
// we can select an element based on another element.
// sometimes we need to select elements relative to a certain other element.

const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children); // HTML Collection
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// selects the closest header to h1 element, the closest parent element that has this class
// receives a query string like querySelector
h1.closest('.header').style.background = 'var(--gradient-secondary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
// all siblings
console.log(h1.parentElement.children); // HTML Collection
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
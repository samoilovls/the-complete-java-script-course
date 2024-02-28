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

*/

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

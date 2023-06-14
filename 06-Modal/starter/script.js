'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal'); // matches multiple elements

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };
// for (let i = 0; i < btnShowModal.length; i++)
//   btnShowModal[i].addEventListener('click', openModal);

// We use loop to have access to multiple elements with the same class name:
console.log(btnShowModal); // Like an Array
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', function () {
    console.log('Button clicked');
    modal.classList.remove('hidden'); // here we do not use dot. with class
    overlay.classList.remove('hidden'); // modal.style.display= 'block'
  });
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// We are not calling the function: closeModal()
// It should be executed only when the click event happens:
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Anytime that an event occurs, JS generates an object contains all the information about the event, and we can access that object in the event handler function by giving this function a parameter: as the event occurs JS will call this function with the event object as an argument:
// We do not call this function here ourselves, we only define it here:
document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); // Here we need to call the function because when it reaches this line of code something needs to happen
  }
});

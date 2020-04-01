let billAmount = document.querySelector('.billAmount');
let numberOfPeople = document.querySelector('.numOfPeople');
let serviceRating = document.querySelector('select').value;
let calcBtn = document.querySelector('.calc-btn');
let clearBtn = document.querySelector('.clear-btn')

window.addEventListener('load', handlePageLoad)

function handlePageLoad() {
  // disable the buttons
  disableBtns()
}
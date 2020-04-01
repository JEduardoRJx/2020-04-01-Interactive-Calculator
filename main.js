let billAmount = document.querySelector('.bill-amount');
let numOfPeople = document.querySelector('.num-of-people');
let serviceRating = document.querySelector('select').value;
let calcBtn = document.querySelector('.calc-btn');
let clearBtn = document.querySelector('.clear-btn')

window.addEventListener('load', handlePageLoad)

function handlePageLoad() {
  // disable the buttons
  btnStatus()
}

function btnStatus() {
  if (billAmount.value === '' || numOfPeople.value === '') {
    calcBtn.disabled = true;
    clearBtn.disabled = true;
  } else {
    calcBtn.disabled = false;
    clearBtn.disabled = false;
  }
}
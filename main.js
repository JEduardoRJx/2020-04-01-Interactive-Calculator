let billAmountInput = document.querySelector('.bill-amount');
let numOfPeopleInput = document.querySelector('.num-of-people');

let calcBtn = document.querySelector('.calc-btn');
let clearBtn = document.querySelector('.clear-btn')

window.addEventListener('load', handlePageLoad)
billAmountInput.addEventListener('keyup', btnStatus)
numOfPeopleInput.addEventListener('keyup', btnStatus)

calcBtn.addEventListener('click', calculateTip)

function handlePageLoad() {
  // disable the buttons
  btnStatus()
}

function btnStatus() {
  if (billAmountInput.value === '' || numOfPeopleInput.value === '') {
    calcBtn.disabled = true;
    clearBtn.disabled = true;
  } else {
    calcBtn.disabled = false;
    clearBtn.disabled = false;
  }
}

function calculateTip() {
  // btnStatus();
  let serviceRating = document.querySelector('select').value;
  let billAmount = billAmountInput.value;
  let numOfPeople = numOfPeopleInput.value;
  let tipAmount = (billAmount * serviceRating).toFixed(2)
  tipAmount = parseFloat(tipAmount)
  let splitBillAmount = (billAmount / numOfPeople).toFixed(2)
  splitBillAmount = parseFloat(splitBillAmount)
  let total = tipAmount + splitBillAmount
  renderAmount(total)
}

function renderAmount(total) {
  console.log(total)
  let body = document.querySelector('body');
  body.insertAdjacentHTML('beforeend', `
  <div class='total'> 
    <h1 class='total'>TOTAL AMOUNT</h1>
    <h1 class='total'>$${total} Each</h1>
  </div>
  `)
}
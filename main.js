let billAmountInput = document.querySelector('.bill-amount');
let numOfPeopleInput = document.querySelector('.num-of-people');
let calcBtn = document.querySelector('.calc-btn');
let clearBtn = document.querySelector('.clear-btn');

window.addEventListener('load', handlePageLoad);
billAmountInput.addEventListener('keyup', btnStatus);
numOfPeopleInput.addEventListener('keyup', btnStatus);
calcBtn.addEventListener('click', calculateTotal);
clearBtn.addEventListener('click', resetInputs);

function handlePageLoad() {
  btnStatus();
}

function btnStatus() {
  let billAmount = parseFloat(billAmountInput.value);
  let numOfPeople = parseFloat(numOfPeopleInput.value);
  if ( billAmount > 0 && numOfPeople > 0) {
    calcBtn.disabled = false;
    clearBtn.disabled = false;
  } else {
    calcBtn.disabled = true;
    clearBtn.disabled = true;
  }
}

function calculateTotal() {
  let serviceRating = document.querySelector('select').value;
  let billAmount = billAmountInput.value;
  let numOfPeople = numOfPeopleInput.value;

  let tipAmount = (billAmount * serviceRating).toFixed(2);
  tipAmount = parseFloat(tipAmount);

  let splitBillAmount = (billAmount / numOfPeople).toFixed(2);
  splitBillAmount = parseFloat(splitBillAmount);

  let total = tipAmount + splitBillAmount;
  renderAmount(total);
}

function renderAmount(total) {
  clearPreviousTotal();
  let body = document.querySelector('body');
  body.insertAdjacentHTML('beforeend', `
  <div class='total'> 
    <h2 class='total'>TOTAL AMOUNT</h2>
    <h2 class='total'>$${total} Each</h2>
  </div>
  `);
}

function clearPreviousTotal() {
  let sibiling = document.querySelector('.total');
  if (sibiling) {
    sibiling.parentNode.removeChild(sibiling);
 }
}

function resetInputs() {
  let serviceRating = document.querySelector('select')
  serviceRating.value = '--';
  billAmountInput.value = '';
  numOfPeopleInput.value = '';
  btnStatus();
  clearPreviousTotal();
}
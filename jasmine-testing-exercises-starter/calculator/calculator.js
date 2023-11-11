window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let value = update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let value = getCurrentUIValues();
  if (value["amount"] == 0 || value["years"] == 0 || value["rate"] == 0) return;
  let calc = calculateMonthlyPayment(value);
  updateMonthly(calc);
  return value;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // monthly payment=P×i1−(1+i)−n
  let p = values["amount"];
  let i = values["years"] / 100;
  let n = values["rate"] * 12;
  let amount = ((p * i) / (1 - Math.pow(1 + i, -n))).toFixed(2);
  return amount;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  if (!monthly) return;
  monthlyPayment.innerText = "$" + monthly;
  return monthly;
}

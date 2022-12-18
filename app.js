// Bunch of codes with small js projects

// Feedback Card

function yes() {
  let feedbackHeading = document.getElementById('feedbackHeading');
  feedbackHeading.innerText = 'Thanks for attending today class 🎉';
  let feedbackDesc = document.getElementById('feedbackDesc');
  feedbackDesc.innerText =
    'Your are on track, We appriciate your participation.';
  let feedbackPriBtn = document.getElementById('feedbackPriBtn');
  feedbackPriBtn.style.display = 'none';
  let feedbackSecBtn = document.getElementById('feedbackSecBtn');
  feedbackSecBtn.style.display = 'none';
}
function no() {
  let feedbackHeading = document.getElementById('feedbackHeading');
  feedbackHeading.innerText =
    'Its Okay, we will meet you in the upcoming classes 🍃';
  let feedbackDesc = document.getElementById('feedbackDesc');
  feedbackDesc.innerText = 'Please watch the recordings of missed classes.';
  let feedbackPriBtn = document.getElementById('feedbackPriBtn');
  feedbackPriBtn.style.display = 'none';
  let feedbackSecBtn = document.getElementById('feedbackSecBtn');
  feedbackSecBtn.style.display = 'none';
}

// Cube Calculation

function cube() {
  let number = document.getElementById('cubeNumber').value;
  let result = number * number * number;
  userValue.innerText = number + '³';
  cubeResult.innerText = result;
}

// Split Bill function

function bill() {
  let amount = document.getElementById('billAmount').value;
  let person = document.getElementById('billPerson').value;
  let result = (amount / person).toFixed(2);
  billResult.innerText = '₹' + result;
}

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
  feedbackHeading.innerText = 'Its Okay, urgent things grab times 🍃';
  let feedbackDesc = document.getElementById('feedbackDesc');
  feedbackDesc.innerText =
    'We are looking forward your presence in the upcoming classes.';
  let feedbackPriBtn = document.getElementById('feedbackPriBtn');
  feedbackPriBtn.style.display = 'none';
  let feedbackSecBtn = document.getElementById('feedbackSecBtn');
  feedbackSecBtn.style.display = 'none';
}

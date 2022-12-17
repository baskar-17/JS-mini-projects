// Bunch of codes with small js projects

function yes() {
  let heading = document.getElementById('heading');
  heading.innerText = 'Thanks for attending today class 🎉';
  let desc = document.getElementById('desc');
  desc.innerText = 'Your are on track, We appriciate your participation.';
  let priBtn = document.getElementById('priBtn');
  priBtn.style.display = 'none';
  let secBtn = document.getElementById('secBtn');
  secBtn.style.display = 'none';
}
function no() {
  let heading = document.getElementById('heading');
  heading.innerText = 'Its Okay, urgent things grabs time 😓';
  let desc = document.getElementById('desc');
  desc.innerText =
    'We are looking forward your presence in the upcoming classes.';
  let priBtn = document.getElementById('priBtn');
  priBtn.style.display = 'none';
  let secBtn = document.getElementById('secBtn');
  secBtn.style.display = 'none';
}

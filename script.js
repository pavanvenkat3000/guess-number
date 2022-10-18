'use strict';

// document.querySelector('.message').textContent = "let's guess";

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.guess').value = 2;

// console.log(document.querySelector('.guess').value);

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function printmessage(message) {
  if (score <= 1) {
    //document.querySelector('.message').textContent = 'YOU LOST';
    changemessage('YOU LOST!');
    document.querySelector('.score').textContent = 0;
  } else {
    //document.querySelector('.message').textContent = message;
    changemessage(message);
    score--;
    document.querySelector('.score').textContent = score;
  }
}

function changemessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const val = Number(document.querySelector('.guess').value);
  console.log(val);

  if (!val) {
    //document.querySelector('.message').textContent = 'enter a valid number';
    changemessage('enter a valid number');
  } else if (val === secretnumber) {
    document.querySelector('.number').textContent = secretnumber;
    //document.querySelector('.message').textContent = 'Correct Number';
    changemessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  } else if (val < secretnumber) {
    printmessage('Go higher');
  } else {
    printmessage('Go Lower');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //console.log('hii');
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  //document.querySelector('.message').textContent = 'start guessing...';
  changemessage('start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#343434';
  document.querySelector('.guess').value = '';
});

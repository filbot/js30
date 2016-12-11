'use strict';

// Cache dom elements
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime() {
  const now = new Date();

  // Remove transition at 360 degrees to prevent visual jumps
  function toggleTransition(degrees, hand) {
    if (degrees === 90) {
      hand.classList.remove('transition');
    } else {
      if (hand.classList.contains('transition')) {
        return;
      } else {
        hand.classList.add('transition');
      }
    }
  }

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  console.log('seconds:', secondsDegrees);
  toggleTransition(secondsDegrees, secondHand);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  console.log('minutes:', minutesDegrees);
  toggleTransition(minutesDegrees, minuteHand);
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  console.log('hours:', hoursDegrees);
  toggleTransition(hoursDegrees, hourHand);
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Run setDate every second
setInterval(setTime, 1000);

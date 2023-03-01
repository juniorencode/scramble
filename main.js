// F' L2 U2 L' B2 L2 B' U F R F2 D2 R L' D2 F2 L B2 D2 F2
const divScramble = document.querySelector('#scramble');
let scramble = [
  "F'",
  'L2',
  'U2',
  "L'",
  'B2',
  'L2',
  "B'",
  'U',
  'F',
  'R',
  'F2',
  'D2',
  'R',
  "L'",
  'D2',
  'F2',
  'L',
  'B2',
  'D2',
  'F2'
];

const divChronometer = document.querySelector('#chronometer');
let start = null;
let interval = null;

document.addEventListener('keydown', e => {
  if (e.code === 'Space') {
    if (interval !== null) {
      clearInterval(interval);
      interval = null;
      scramble = generator();
      scrambleCube();
      print();
    } else {
      start = new Date().getTime();
      interval = setInterval(() => {
        let current = new Date().getTime();
        let seconds = Math.floor((current - start) / 1000);
        let restMilliseconds = (current - start) % 1000;
        divChronometer.innerText = `${seconds}.${restMilliseconds}`;
      }, 10);
    }
  }
});

scramble = generator();
scrambleCube();

print();

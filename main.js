// F' L2 U2 L' B2 L2 B' U F R F2 D2 R L' D2 F2 L B2 D2 F2
const scramble = [
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
scramble.map(elem => {
  let matrix = [];
  switch (elem) {
    case 'F':
      matrix = rotateMatrixClockwise(cube.face3.content);
      cube.face3.content = matrix;
      break;
    case "F'":
      matrix = rotateMatrixAntiClockwise(cube.face3.content);
      cube.face3.content = matrix;
      break;
    default:
      break;
  }
});
print();

// F' L2 U2 L' B2 L2 B' U F R F2 D2 R L' D2 F2 L B2 D2 F2
const scramble = [
  // "F'",
  // 'L2',
  // 'U2',
  // "L'",
  // 'B2',
  // 'L2',
  // "B'",
  // 'U',
  // 'F',
  // 'R',
  // 'F2',
  // 'D2',
  // 'R',
  // "L'",
  // 'D2',
  // 'F2',
  // 'L',
  // 'B2',
  // 'D2',
  // 'F2'
  'U'
];
scramble.map(elem => {
  let matrix = [];
  switch (elem) {
    case 'U':
      moveU(1);

      break;
    case "U'":
      moveU(2);
      break;
    case 'L':
      moveL(1);
      break;
    case "L'":
      moveL(2);
      break;
    case 'F':
      moveF(1);
      break;
    case "F'":
      moveF(2);
      break;
    case 'R':
      moveR(1);
      break;
    case "R'":
      moveR(2);
      break;
    case 'B':
      moveB(1);
      break;
    case "B'":
      moveB(2);
      break;
    case 'D':
      moveD(1);
      break;
    case "D'":
      moveD(2);
      break;
    case 'U2':
      moveU(1);
      moveU(1);
      break;
    case 'L2':
      moveL(1);
      moveL(1);
      break;
    case 'F2':
      moveF(1);
      moveF(1);
      break;
    case 'R2':
      moveR(1);
      moveR(1);
      break;
    case 'B2':
      moveB(1);
      moveB(1);
      break;
    case 'D2':
      moveD(1);
      moveD(1);
      break;
    default:
      break;
  }
});
print();

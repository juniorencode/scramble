const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 630;
canvas.height = 470;

const size = 50;

const print = () => {
  for (attr in cube) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.fillStyle = cube[attr].content[i][j].color;
        ctx.fillRect(
          cube[attr].x + j * size,
          cube[attr].y + i * size,
          size,
          size
        );
        ctx.strokeRect(
          cube[attr].x + j * size,
          cube[attr].y + i * size,
          size,
          size
        );

        ctx.fillStyle = 'black';

        ctx.font = '20px serif';
        ctx.fillText(
          `[${i}, ${j}]`,
          cube[attr].x + 4 + j * size,
          cube[attr].y + 25 + i * size
        );
      }
    }
  }
};

function rotateMatrixClockwise(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = temp;
    }
  }
  return matrix;
}

function rotateMatrixAntiClockwise(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      const temp = matrix[j][i];
      matrix[j][i] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = temp;
    }
  }
  return matrix;
}

const moveU = type => {
  let matrix = [];
  if (type === 1) {
    matrix = rotateMatrixClockwise(cube.face1.content);
    cube.face1.content = matrix;

    matrix = cube.face5.content[0];
    cube.face5.content[0] = cube.face2.content[0];
    cube.face2.content[0] = cube.face3.content[0];
    cube.face3.content[0] = cube.face4.content[0];
    cube.face4.content[0] = matrix;
  }

  if (type === 2) {
    matrix = rotateMatrixAntiClockwise(cube.face1.content);
    cube.face1.content = matrix;

    matrix = cube.face5.content[0];
    cube.face5.content[0] = cube.face4.content[0];
    cube.face4.content[0] = cube.face3.content[0];
    cube.face3.content[0] = cube.face2.content[0];
    cube.face2.content[0] = matrix;
  }
};

const moveL = type => {
  let matrix = [];
  if (type === 1) {
    matrix = rotateMatrixClockwise(cube.face2.content);
    cube.face2.content = matrix;

    matrix = [
      cube.face1.content[0][0],
      cube.face1.content[1][0],
      cube.face1.content[2][0]
    ];

    cube.face1.content[0][0] = cube.face5.content[2][2];
    cube.face1.content[1][0] = cube.face5.content[1][2];
    cube.face1.content[2][0] = cube.face5.content[0][2];

    cube.face5.content[0][2] = cube.face6.content[2][0];
    cube.face5.content[1][2] = cube.face6.content[1][0];
    cube.face5.content[2][2] = cube.face6.content[0][0];

    cube.face6.content[2][0] = cube.face3.content[2][0];
    cube.face6.content[1][0] = cube.face3.content[1][0];
    cube.face6.content[0][0] = cube.face3.content[0][0];

    cube.face3.content[2][0] = matrix[2];
    cube.face3.content[1][0] = matrix[1];
    cube.face3.content[0][0] = matrix[0];
  }

  if (type === 2) {
    matrix = rotateMatrixAntiClockwise(cube.face2.content);
    cube.face2.content = matrix;

    matrix = [
      cube.face1.content[0][0],
      cube.face1.content[1][0],
      cube.face1.content[2][0]
    ];

    cube.face1.content[0][0] = cube.face3.content[0][0];
    cube.face1.content[1][0] = cube.face3.content[1][0];
    cube.face1.content[2][0] = cube.face3.content[2][0];

    cube.face3.content[2][0] = cube.face6.content[2][0];
    cube.face3.content[1][0] = cube.face6.content[1][0];
    cube.face3.content[0][0] = cube.face6.content[0][0];

    cube.face6.content[2][0] = cube.face5.content[0][2];
    cube.face6.content[1][0] = cube.face5.content[1][2];
    cube.face6.content[0][0] = cube.face5.content[2][2];

    cube.face5.content[2][2] = matrix[0];
    cube.face5.content[1][2] = matrix[1];
    cube.face5.content[0][2] = matrix[2];
  }
};

const moveF = type => {
  let matrix = [];
  if (type === 1) {
    matrix = rotateMatrixClockwise(cube.face3.content);
    cube.face3.content = matrix;

    matrix = [
      cube.face1.content[2][0],
      cube.face1.content[2][1],
      cube.face1.content[2][2]
    ];

    cube.face1.content[2][0] = cube.face2.content[2][2];
    cube.face1.content[2][1] = cube.face2.content[1][2];
    cube.face1.content[2][2] = cube.face2.content[0][2];

    cube.face2.content[0][2] = cube.face6.content[0][0];
    cube.face2.content[1][2] = cube.face6.content[0][1];
    cube.face2.content[2][2] = cube.face6.content[0][2];

    cube.face6.content[0][0] = cube.face4.content[2][0];
    cube.face6.content[0][1] = cube.face4.content[1][0];
    cube.face6.content[0][2] = cube.face4.content[0][0];

    cube.face4.content[0][0] = matrix[0];
    cube.face4.content[1][0] = matrix[1];
    cube.face4.content[2][0] = matrix[2];
  }

  if (type === 2) {
    matrix = rotateMatrixAntiClockwise(cube.face3.content);
    cube.face3.content = matrix;

    matrix = [
      cube.face1.content[0][2],
      cube.face1.content[1][2],
      cube.face1.content[2][2]
    ];

    cube.face1.content[0][2] = cube.face5.content[2][0];
    cube.face1.content[1][2] = cube.face5.content[1][0];
    cube.face1.content[2][2] = cube.face5.content[0][0];

    cube.face5.content[2][0] = cube.face6.content[2][2];
    cube.face5.content[1][0] = cube.face6.content[1][2];
    cube.face5.content[0][0] = cube.face6.content[0][2];

    cube.face6.content[2][2] = cube.face3.content[2][2];
    cube.face6.content[1][2] = cube.face3.content[1][2];
    cube.face6.content[0][2] = cube.face3.content[0][2];

    cube.face3.content[2][2] = matrix[2];
    cube.face3.content[1][2] = matrix[1];
    cube.face3.content[0][2] = matrix[0];
  }
};

const moveB = type => {
  let matrix = [];
  if (type === 1) {
    matrix = rotateMatrixClockwise(cube.face5.content);
    cube.face5.content = matrix;

    matrix = [
      cube.face1.content[0][0],
      cube.face1.content[0][1],
      cube.face1.content[0][2]
    ];

    cube.face1.content[0][0] = cube.face4.content[0][2];
    cube.face1.content[0][1] = cube.face4.content[1][2];
    cube.face1.content[0][2] = cube.face4.content[2][2];

    cube.face4.content[0][2] = cube.face6.content[2][2];
    cube.face4.content[1][2] = cube.face6.content[2][1];
    cube.face4.content[2][2] = cube.face6.content[2][0];

    cube.face6.content[2][0] = cube.face2.content[0][0];
    cube.face6.content[2][1] = cube.face2.content[1][0];
    cube.face6.content[2][2] = cube.face2.content[2][0];

    cube.face2.content[0][0] = matrix[2];
    cube.face2.content[1][0] = matrix[1];
    cube.face2.content[2][0] = matrix[0];
  }

  if (type === 2) {
    matrix = rotateMatrixAntiClockwise(cube.face5.content);
    cube.face5.content = matrix;

    matrix = [
      cube.face1.content[0][0],
      cube.face1.content[0][1],
      cube.face1.content[0][2]
    ];

    cube.face1.content[0][0] = cube.face2.content[2][0];
    cube.face1.content[0][1] = cube.face2.content[1][0];
    cube.face1.content[0][2] = cube.face2.content[0][0];

    cube.face2.content[2][0] = cube.face6.content[2][2];
    cube.face2.content[1][0] = cube.face6.content[2][1];
    cube.face2.content[0][0] = cube.face6.content[2][0];

    cube.face6.content[2][2] = cube.face4.content[0][2];
    cube.face6.content[2][1] = cube.face4.content[1][2];
    cube.face6.content[2][0] = cube.face4.content[2][2];

    cube.face4.content[2][2] = matrix[2];
    cube.face4.content[1][2] = matrix[1];
    cube.face4.content[0][2] = matrix[0];
  }
};

const moveR = type => {
  let matrix = [];
  if (type === 1) {
    matrix = rotateMatrixClockwise(cube.face4.content);
    cube.face4.content = matrix;

    matrix = [
      cube.face1.content[0][2],
      cube.face1.content[1][2],
      cube.face1.content[2][2]
    ];

    cube.face1.content[0][2] = cube.face3.content[0][2];
    cube.face1.content[1][2] = cube.face3.content[1][2];
    cube.face1.content[2][2] = cube.face3.content[2][2];

    cube.face3.content[2][2] = cube.face6.content[2][2];
    cube.face3.content[1][2] = cube.face6.content[1][2];
    cube.face3.content[0][2] = cube.face6.content[0][2];

    cube.face6.content[2][2] = cube.face5.content[0][0];
    cube.face6.content[1][2] = cube.face5.content[1][0];
    cube.face6.content[0][2] = cube.face5.content[2][0];

    cube.face5.content[0][0] = matrix[2];
    cube.face5.content[1][0] = matrix[1];
    cube.face5.content[2][0] = matrix[0];
  }

  if (type === 2) {
    matrix = rotateMatrixAntiClockwise(cube.face4.content);
    cube.face4.content = matrix;

    matrix = [
      cube.face1.content[0][2],
      cube.face1.content[1][2],
      cube.face1.content[2][2]
    ];

    cube.face1.content[0][2] = cube.face5.content[2][0];
    cube.face1.content[1][2] = cube.face5.content[1][0];
    cube.face1.content[2][2] = cube.face5.content[0][0];

    cube.face5.content[2][0] = cube.face6.content[0][2];
    cube.face5.content[1][0] = cube.face6.content[1][2];
    cube.face5.content[0][0] = cube.face6.content[2][2];

    cube.face6.content[2][2] = cube.face3.content[2][2];
    cube.face6.content[1][2] = cube.face3.content[1][2];
    cube.face6.content[0][2] = cube.face3.content[0][2];

    cube.face3.content[2][2] = matrix[2];
    cube.face3.content[1][2] = matrix[1];
    cube.face3.content[0][2] = matrix[0];
  }
};

const moveD = type => {
  let matrix = [];
  if (type === 1) {
    matrix = rotateMatrixClockwise(cube.face6.content);
    cube.face6.content = matrix;

    matrix = cube.face5.content[2];
    cube.face5.content[2] = cube.face4.content[2];
    cube.face4.content[2] = cube.face3.content[2];
    cube.face3.content[2] = cube.face2.content[2];
    cube.face2.content[2] = matrix;
  }

  if (type === 2) {
    matrix = rotateMatrixAntiClockwise(cube.face6.content);
    cube.face6.content = matrix;

    matrix = cube.face5.content[2];
    cube.face5.content[2] = cube.face2.content[2];
    cube.face2.content[2] = cube.face3.content[2];
    cube.face3.content[2] = cube.face4.content[2];
    cube.face4.content[2] = matrix;
  }
};

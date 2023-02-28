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

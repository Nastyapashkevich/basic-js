const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let numberOfCats = 0;
  for (let i = 0; i < matrix.length; i++) {
    let columns = matrix[i].length;
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === '^^') {
        numberOfCats++;
      }
    }
  }
  return numberOfCats;
};

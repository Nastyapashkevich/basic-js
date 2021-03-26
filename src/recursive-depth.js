const CustomError = require("../extensions/custom-error");
const hasNestedArray = (arr) => arr.some(item => Array.isArray(item));
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    if(hasNestedArray(arr)) {
      const newArray = arr.reduce((acc, cur) => acc.concat(cur), []);
      return depth + this.calculateDepth(newArray);
   }
   return depth;
  }
};
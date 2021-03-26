const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!(arr instanceof Array)) throw new Error('Error!');

  let clone = [...arr];
  const [lastIndex, length] = [clone.length - 1, clone.length];
  // const lastIndex = clone.length - 1;
  // const length = clone.length;
  let res = [];

  const actions = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ];

  const NA = '--empty--';

  const specialValues = [...actions, NA];

  for(let i = 0; i < length; i++) {
    const curr = clone[i];

    if(!specialValues.includes(curr)) {
      res.push(curr);
      continue;
    }

    switch(curr) {
      case '--discard-next':
        if(i >= lastIndex) {
          continue;
        } else {
          clone[i + 1] = NA;
          i++;
        }
        break;

      case '--discard-prev':
        if(i === 0 || clone[i - 1] === NA) {
          continue;
        } else {
          res.pop();
        }
        break;

      case '--double-next':
        if(i >= lastIndex) {
          continue;
        } else {
          res.push(clone[i + 1]);
        }
        break;

      case '--double-prev':
        if(i === 0 || clone[i - 1] === NA) {
          continue;
        } else {
          res.push(clone[i - 1]);
        }
        break;

      case NA:
        continue;
        break;
    }
  }

  return res;
};

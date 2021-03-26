const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = 1, separator = '+', addition = 'no-addition', additionRepeatTimes = 1, additionSeparator = '|'}) {
  str = String(str);
  separator = String(separator);
  addition = String(addition);
  additionSeparator = String(additionSeparator);
  let resStr = '';
  const [mainSepLength, additionSepLength] = [separator.length, additionSeparator.length];
  
  if(addition !== 'no-addition') {
    for (let i = 0; i < repeatTimes; i++) {
      let strAddition = '';
      for(let j = 0; j < additionRepeatTimes; j++) {
        strAddition += `${addition}${additionSeparator}`
      }
      resStr += `${str}${strAddition.slice(0, -additionSepLength)}${separator}`;
    }
  } else {
    for(let i = 0; i < repeatTimes; i++) {
      resStr += `${str}${separator}`;
    }
  }

  return resStr.slice(0, -mainSepLength);
};
  
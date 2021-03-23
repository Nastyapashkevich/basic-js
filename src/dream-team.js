const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!(members instanceof Array)) return false;
  const length = members.length;
  const array = [];
  for(let i = 0; i < length; i++) {
    if(typeof members[i] === 'string') {
      const trimmedMember = members[i].trim();
      array.push(trimmedMember[0].toUpperCase());
    }
  }
  return array.sort().join('');
};

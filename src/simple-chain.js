const CustomError = require("../extensions/custom-error");

const chainMaker = {
  currChain: [],
  getLength() {
    return this.currChain.length;
  },
  addLink(value) {
    this.currChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(this._checkIntegerNumber(position)) {
      if(position < 1 || position > this.getLength()) {
        this._deleteChain();
        throw new Error('Error!');
      }
      const index = position - 1;
      this.currChain.splice(index, 1);
      return this;
    }
    this._deleteChain();
    throw new Error('Error!');
  },
  reverseChain() {
    this.currChain.reverse();
    return this;
  },
  finishChain() {
    const chain = this._getChain();
    this._deleteChain();
    return chain;
  },
  _deleteChain() {
    this.currChain.length = 0;
  },
  _checkIntegerNumber(number) {
    return typeof number === 'number' && (number ^ 0) === number;
  },
  _getChain() {
    return this.currChain.join('~~');
  }
};

module.exports = chainMaker;

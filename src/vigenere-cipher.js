const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag;
  }
  
  encrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw new Error('Error!');
    }
    
    let result = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    
    for(let i = 0, j = 0; i < message.length; i++) {
      if(j === key.length) j = 0;
      if(message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        result += String.fromCharCode( ((message.charCodeAt(i) - 65) + (key.charCodeAt(j) - 65)) % 26 + 65);
        j++;
      } else {
        result += message[i];
      }
    }

    if(this.flag) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }    

  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined || key === undefined) {
      throw new Error('Error!');
    }

    let result = '';
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    
    for(let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if(j === key.length) j = 0;
      if(encryptedMessage.charCodeAt(i) >= 65 && encryptedMessage.charCodeAt(i) <= 90) {
        result += String.fromCharCode( ((encryptedMessage.charCodeAt(i) - 65) - (key.charCodeAt(j) - 65) + 26) % 26 + 65);
        j++;
      } else {
        result += encryptedMessage[i];
      }
    }

    if(this.flag) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;

var crypto = require('crypto-js');

var secretMessage= {
  name: "ajay",
  screntName: "007"
};

var secretKey = '123abc';

//Encrypt
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage),secretKey);
console.log("Encrypted Message = "+encryptedMessage);

//Decrypt

var bytes = crypto.AES.decrypt(encryptedMessage,secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log("Decrypted Message = "+JSON.stringify(decryptedMessage));

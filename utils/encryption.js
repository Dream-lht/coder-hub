const  CryptoJS = require("crypto-js");

function AESPassword(password){
    return CryptoJS.AES.encrypt(password,'secret key 123').toString();
}

module.exports = AESPassword;
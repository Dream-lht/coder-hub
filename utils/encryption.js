const  CryptoJS = require("crypto-js");

function AESPassword(password){
    return CryptoJS.MD5(password).toString();
}
module.exports = AESPassword;
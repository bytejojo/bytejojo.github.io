import CryptoJS from 'crypto-js'

let util = {};
util.title = function (title) {
  title = title ? title + ' - 郝晓龙' : '首页 - 郝晓龙';
  window.document.title = title;
};

const key = 'haoxiaolong';
const ivUtf8 = CryptoJS.enc.Utf8.parse("1234567890000000");
util.aesEncrypt = function (data) {
  let encrypted = CryptoJS.AES.encrypt(data, key, {
    iv: ivUtf8,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encrypted));
};

util.aesDecrypt = function (data) {
  let dataUtf8 = CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
  let decrypted = CryptoJS.AES.decrypt(dataUtf8, key, {
    iv: ivUtf8,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
};

export default util;

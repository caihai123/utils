const capitalizeEveryWord = (str) =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

const isAbsoluteURL = (str) => /^[a-z][a-z0-9+.-]*:/.test(str);
// 导出这个对象
exports.capitalizeEveryWord = capitalizeEveryWord;
exports.isAbsoluteURL = isAbsoluteURL;

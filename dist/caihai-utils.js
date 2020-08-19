(function () {
  "use strict";
  var isCommonjs = typeof module !== "undefined" && module.exports;

  var capitalizeEveryWord = (str) =>
    str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

  var isAbsoluteURL = (str) => /^[a-z][a-z0-9+.-]*:/.test(str);
  // 导出这个对象
  var utils = { capitalizeEveryWord, isAbsoluteURL };
  if (isCommonjs) {
    module.exports = utils;
  } else {
    window.utils = utils;
  }
})();

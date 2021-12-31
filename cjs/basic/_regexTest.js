const _curry = require('./_curry.js');

function regexTest(regex, str) {
  return regex.test(str);
}

module.exports = _curry(regexTest);
const _curry = require('./_curry.js');

function _regexMatch(pattern, str) {
  return typeof str === 'string' ? str.match(pattern) : null;
}

module.exports = _curry(_regexMatch);
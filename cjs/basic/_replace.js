const _curryRight = require('./_curryRight.js');

function _replace(str, pattern, replacement) {
  return typeof str === 'string' ? str.replace(pattern, replacement) : '';
}

module.exports = _curryRight(_replace);
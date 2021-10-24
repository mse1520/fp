const _curryRight = require('./_curryRight.js');

function _split(str, separator) {
  return str.split(separator);
}

module.exports = _curryRight(_split);
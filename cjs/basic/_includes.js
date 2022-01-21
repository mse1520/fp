const _curryRight = require('./_curryRight.js');

const _toArray = require('./_toArray.js');

function _includes(iterator, value) {
  return _toArray(iterator).includes(value);
}

module.exports = _curryRight(_includes);
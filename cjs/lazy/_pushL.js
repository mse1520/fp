const _curryRight = require('../basic/_curryRight.js');

const _concatL = require('./_concatL.js');

function _pushL(iterator, value) {
  return _concatL(iterator, [value]);
}

module.exports = _curryRight(_pushL);
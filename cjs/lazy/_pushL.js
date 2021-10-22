const _curryRight = require('../basic/_curryRight.js');

const _concatL = require('./_concatL.js');

function _pushL(iterator, args) {
  return _concatL(iterator, [args]);
}

module.exports = _curryRight(_pushL);
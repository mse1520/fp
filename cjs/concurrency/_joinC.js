const _curryRight = require('../basic/_curryRight.js');

const _reduceC = require('./_reduceC.js');

function _joinC(iterator, separator) {
  return _reduceC(iterator, (accumulate, value) => `${accumulate}${separator}${value}`);
}

module.exports = _curryRight(_joinC);
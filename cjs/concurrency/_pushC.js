const _curryRight = require('../basic/_curryRight.js');

const _concatL = require('../lazy/_concatL.js');

const _takeAllC = require('./_takeAllC.js');

function _pushC(iterator, args) {
  return _takeAllC(_concatL(iterator, [args]));
}

module.exports = _curryRight(_pushC);
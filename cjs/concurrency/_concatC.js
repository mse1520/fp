const _curryRight = require('../basic/_curryRight.js');

const _concatL = require('../lazy/_concatL.js');

const _takeAllC = require('./_takeAllC.js');

function _concatC(iterator1, iterator2) {
  return _takeAllC(_concatL(iterator1, iterator2));
}

module.exports = _curryRight(_concatC);
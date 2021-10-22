const _curryRight = require('../basic/_curryRight.js');

const _concatL = require('../lazy/_concatL.js');

const _takeAllC = require('./_takeAllC.js');

function _concatC(iterator, others) {
  return _takeAllC(_concatL(iterator, others));
}

module.exports = _curryRight(_concatC);
const _curryRight = require('../basic/_curryRight.js');

const _filterL = require('../lazy/_filterL.js');

const _takeAllC = require('./_takeAllC.js');

function _filterC(iterator, predicate) {
  return _takeAllC(_filterL(iterator, predicate));
}

module.exports = _curryRight(_filterC);
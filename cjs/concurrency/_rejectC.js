const _curryRight = require('../basic/_curryRight.js');

const _filterL = require('../lazy/_filterL.js');

const _takeAllC = require('./_takeAllC.js');

function _rejectC(iterator, predicate) {
  return _takeAllC(_filterL(iterator, (value, index) => !predicate(value, index)));
}

module.exports = _curryRight(_rejectC);
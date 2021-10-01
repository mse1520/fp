const _curryRight = require('../basic/_curryRight.js');

const _mapL = require('../lazy/_mapL.js');

const _takeAllC = require('./_takeAllC.js');

function forEachC(iterator, predicate) {
  return _takeAllC(_mapL(iterator, (value, index) => (predicate(value, index), value)));
}

module.exports = _curryRight(forEachC);
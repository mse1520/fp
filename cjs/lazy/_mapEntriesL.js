const _curryRight = require('../basic/_curryRight.js');

const _mapL = require('./_mapL.js');

function _mapEntriesL(entries, predicate) {
  return _mapL(entries, ([key, value], index) => [key, predicate(value, index)]);
}

module.exports = _curryRight(_mapEntriesL);
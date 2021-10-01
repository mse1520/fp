const _curryRight = require('../basic/_curryRight.js');

const _mapL = require('../lazy/_mapL.js');

const _takeAllC = require('./_takeAllC.js');

function _mapEntriesC(entries, predicate) {
  return _takeAllC(_mapL(entries, ([key, value], index) => [key, predicate(value, index)]));
}

module.exports = _curryRight(_mapEntriesC);
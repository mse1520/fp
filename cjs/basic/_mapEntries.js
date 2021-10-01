const _curryRight = require('./_curryRight.js');

const _takeAll = require('./_takeAll.js');

const _mapL = require('../lazy/_mapL.js');

function mapEntries(entries, predicate) {
  return _takeAll(_mapL(entries, ([key, value], index) => [key, predicate(value, index)]));
}

module.exports = _curryRight(mapEntries);
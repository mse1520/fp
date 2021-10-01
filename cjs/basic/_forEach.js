const _curryRight = require('./_curryRight.js');

const _takeAll = require('./_takeAll.js');

const _mapL = require('../lazy/_mapL.js');

function _forEach(iterator, predicate) {
  return _takeAll(_mapL(iterator, (value, index) => (predicate(value, index), value)));
}

module.exports = _curryRight(_forEach);
const _curryRight = require('../basic/_curryRight.js');

const _mapL = require('./_mapL.js');

function _forEachL(iterator, predicate) {
  return _mapL(iterator, (value, index) => (predicate(value, index), value));
}

module.exports = _curryRight(_forEachL);
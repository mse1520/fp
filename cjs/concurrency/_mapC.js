const _curryRight = require('../basic/_curryRight.js');

const _mapL = require('../lazy/_mapL.js');

const _takeAllC = require('./_takeAllC.js');

function _mapC(iterator, predicate) {
  return _takeAllC(_mapL(iterator, predicate));
}

module.exports = _curryRight(_mapC);
const _curryRight = require('../basic/_curryRight.js');

const _mapL = require('./_mapL.js');

const _flatL = require('./_flatL.js');

function _flatMapL(iterator, predicate) {
  return _flatL(_mapL(iterator, predicate));
}

module.exports = _curryRight(_flatMapL);
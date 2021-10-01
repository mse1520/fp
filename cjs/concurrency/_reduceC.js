const toIterator = require('../internal/toiterator.js');

const _curryRight3To2 = require('../basic/_curryRight3To2.js');

const _head = require('../basic/_head.js');

const _reduce = require('../basic/_reduce.js');

function _reduceC(iterator, predicate, accumulate) {
  let _iterator = [...iterator];
  if (arguments.length < 3) _iterator = toIterator(_iterator), accumulate = _head(_iterator);
  return _reduce(_iterator, predicate, accumulate);
}

;
module.exports = _curryRight3To2(_reduceC);
const toIterator = require('../internal/toiterator.js');

const curryRightReduce = require('../internal/curryRightReduce.js');

const _head = require('../basic/_head.js');

const _reduce = require('../basic/_reduce.js');

function _reduceC(iterator, predicate, accumulate) {
  let _iterator = [...iterator];
  if (arguments.length < 3) _iterator = toIterator(_iterator), accumulate = _head(_iterator);
  return _reduce(_iterator, predicate, accumulate);
}

;
module.exports = curryRightReduce(_reduceC);
import toIterator from '../internal/toiterator.js';
import curryRightReduce from '../internal/curryRightReduce.js';
import _head from '../basic/_head.js';
import _reduce from '../basic/_reduce.js';

function _reduceC(iterator, predicate, accumulate) {
  let _iterator = [...iterator];

  if (arguments.length < 3)
    _iterator = toIterator(_iterator), accumulate = _head(_iterator);

  return _reduce(_iterator, predicate, accumulate);
}

export default curryRightReduce(_reduceC);
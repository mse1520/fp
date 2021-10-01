import toIterator from '../internal/toiterator.js';
import curryRight3To2 from '../basic/curryRight3To2.js';
import head from '../basic/head.js';
import reduce from '../basic/reduce.js';

function reduceC(iterator, predicate, accumulate) {
  let _iterator = [...iterator];

  if (arguments.length < 3)
    _iterator = toIterator(_iterator), accumulate = head(_iterator);

  return reduce(_iterator, predicate, accumulate);
};

export default curryRight3To2(reduceC);
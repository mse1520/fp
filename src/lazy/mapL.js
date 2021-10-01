import releasePromise from '../internal/releasePromise.js';
import toIterator from '../internal/toiterator.js';
import curryRight from '../basic/curryRight.js';

function* mapL(iterator, predicate) {
  iterator = toIterator(iterator);

  let next, index = -1;
  while (!(index++, next = iterator.next()).done)
    yield releasePromise(next.value, predicate, index);
};

export default curryRight(mapL);
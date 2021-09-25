import releasePromise from '../internal/releasePromise.js';
import toIterator from '../internal/toiterator.js';

import _curryRight from '../basic/_curryRight.js';

function* _mapL(iterator, predicate) {
  iterator = toIterator(iterator);

  let next, index = -1;
  while (!(index++, next = iterator.next()).done)
    yield releasePromise(next.value, predicate, index);
};

export default _curryRight(_mapL);
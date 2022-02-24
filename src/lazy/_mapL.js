import releasePromise from '../internal/releasePromise.js';
import toIterator from '../internal/toiterator.js';
import _curryRight from '../basic/_curryRight.js';

function* _mapL(iterator, predicate) {
  iterator = toIterator(iterator);

  let index = 0;
  for (const value of iterator) {
    yield releasePromise(value, predicate, index);
    index++;
  }
}

export default _curryRight(_mapL);
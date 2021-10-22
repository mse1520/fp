import toIterator from '../internal/toiterator.js';
import _curryRight from '../basic/_curryRight.js';

function* _concatL(iterator, others) {
  iterator = toIterator(iterator);
  others = toIterator(others);

  yield* iterator;

  let next;
  while (!(next = others.next()).done) {
    next.value = toIterator(next.value);
    yield* next.value;
  }
}

export default _curryRight(_concatL);
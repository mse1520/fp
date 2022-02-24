import _curryRight from '../basic/_curryRight.js';
import toIterator from '../internal/toiterator.js';

function* takeL(iterator, length) {
  if (length < 1) return;

  iterator = toIterator(iterator);

  for (const value of iterator) {
    yield value;
    if (!--length) return;
  }
}

export default _curryRight(takeL);
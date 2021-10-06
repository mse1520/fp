import _curryRight from '../basic/_curryRight.js';
import toIterator from '../internal/toiterator.js';

function* takeL(iterator, length) {
  if (length < 1) return;

  iterator = toIterator(iterator);
  
  let next;
  while (!(next = iterator.next()).done) {
    yield next.value;
    if (!--length) break;
  }
}

export default _curryRight(takeL);
import catchNoop from '../internal/catchNoop.js';
import toIterator from '../internal/toiterator.js';
import curryRight from '../basic/curryRight.js';

function* filterL(iterator, predicate) {
  iterator = toIterator(iterator);

  let next, index = -1;
  while (!(index++, next = iterator.next()).done) {
    next.value instanceof Promise
      ? yield catchNoop(next.value.then(value => predicate(value, index) ? value : Promise.reject(errorNoop)))
      : predicate(next.value, index)
        ? yield next.value : undefined;
  }
};

export default curryRight(filterL);
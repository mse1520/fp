import noopHandler from '../internal/noopHandler.js';
import toIterator from '../internal/toiterator.js';
import curryRight from './curryRight.js';

function take(iterator, length) {
  const result = [];
  iterator = toIterator(iterator);

  return function recursive() {
    let next;
    while (!(next = iterator.next()).done) {
      if (next.value instanceof Promise) {
        return noopHandler(
          next.value.then(value => {
            result.push(value);
            return result.length === length ? result : recursive();
          }),
          recursive);
      }

      result.push(next.value);
      if (result.length === length) return result;
    }

    return result;
  }();
};

export default curryRight(take);
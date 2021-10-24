import noopHandler from '../internal/noopHandler.js';
import toIterator from '../internal/toiterator.js';
import _curryRight from './_curryRight.js';

function _take(iterator, length) {
  const result = [];
  iterator = toIterator(iterator);

  return function recursive() {
    let next;
    while (!(next = iterator.next()).done) {
      if (next.value instanceof Promise) {
        return noopHandler(next.value.then(value =>
          (result.push(value), result).length === length ? result : recursive()), recursive);
      }

      result.push(next.value);
      if (result.length === length) return result;
    }

    return result;
  }();
}

export default _curryRight(_take);
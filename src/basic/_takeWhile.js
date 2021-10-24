import noopHandler from '../internal/noopHandler.js';
import releasePromise from '../internal/releasePromise.js';
import toIterator from '../internal/toiterator.js';
import _curryRight from './_curryRight.js';

function _takeWhile(iterator, predicate) {
  const result = [];
  iterator = toIterator(iterator);

  return (function recursive() {
    let next, index = -1;
    while (!(next = iterator.next()).done) {
      const value = releasePromise(next.value, predicate, index);

      if (value instanceof Promise) return noopHandler(
        value.then(async value => value ? (result.push(await next.value), recursive()) : result), recursive);

      if (!value) return result;
      result.push(next.value);
    }

    return result;
  })();
}

export default _curryRight(_takeWhile);
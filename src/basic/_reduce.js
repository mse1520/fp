import noopHandler from '../internal/noopHandler.js';
import releasePromise from '../internal/releasePromise.js';
import toIterator from '../internal/toiterator.js';
import curryRightReduce from '../internal/curryRightReduce.js';
import _head from './_head.js';

function _reduce(iterator, predicate, accumulate) {
  if (arguments.length < 3) iterator = toIterator(iterator), accumulate = _head(iterator);

  iterator = toIterator(iterator);

  return releasePromise(accumulate, function recursive(accumulate, value, index) {
    if (arguments.length > 1) accumulate = predicate(accumulate, value, index);

    let next, _index = -1;
    while (!(_index++, next = iterator.next()).done) {
      if (next.value instanceof Promise) {
        return noopHandler(
          next.value.then(value => recursive(accumulate, value, _index)),
          () => recursive(accumulate)
        );
      }

      accumulate = predicate(accumulate, next.value, _index);
      if (accumulate instanceof Promise) return accumulate.then(recursive);
    }

    return accumulate;
  });
}

export default curryRightReduce(_reduce);
import errorNoop from '../internal/errorNoop.js';
import catchNoop from '../internal/catchNoop.js';
import toIterator from '../internal/toiterator.js';
import releasePromise from '../internal/releasePromise.js';
import _curryRight from '../basic/_curryRight.js';

function* _takeWhileL(iterator, predicate) {
  let promise = Promise.resolve();
  let _while = true;
  iterator = toIterator(iterator);

  let next, index = -1;
  while (!(index++, next = iterator.next()).done) {
    const origin = next.value;
    const value = releasePromise(origin, predicate, index);

    value instanceof Promise
      ? yield catchNoop(promise = promise
        .then(_ => value)
        .then(value => (_while = value) ? origin : Promise.reject(errorNoop)))
      : (_while = value)
        ? yield origin : undefined;

    if (!_while) break;
  }
}

export default _curryRight(_takeWhileL);
import releasePromise from '../internal/releasePromise.js';
import toIterator from '../internal/toiterator.js';
import catchNoop from '../internal/catchNoop.js';
import errorNoop from '../internal/errorNoop.js';
import _curryRight from '../basic/_curryRight.js';

function* _takeUntilL(iterator, predicate) {
  let promise = Promise.resolve();
  let _while = false;
  iterator = toIterator(iterator);

  let next, index = -1;
  while (!(index++, next = iterator.next()).done) {
    const origin = next.value;
    const value = releasePromise(origin, predicate, index);

    yield value instanceof Promise
      ? catchNoop(promise = promise
        .then(_ => value)
        .then(value => _while ? Promise.reject(errorNoop) : (_while = value, origin)))
      : (_while = value, origin);

    if (_while) break;
  }
}

export default _curryRight(_takeUntilL);
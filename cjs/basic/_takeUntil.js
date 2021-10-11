const noopHandler = require('../internal/noopHandler.js');

const releasePromise = require('../internal/releasePromise.js');

const toIterator = require('../internal/toiterator.js');

const _curryRight = require('./_curryRight.js');

function _takeUntil(iterator, predicate) {
  const result = [];
  iterator = toIterator(iterator);
  return function recursive() {
    let next,
        index = -1;

    while (!(next = iterator.next()).done) {
      const value = releasePromise(next.value, predicate, index);
      if (value instanceof Promise) return noopHandler(value.then(async value => (result.push(await next.value), value) ? result : recursive()), recursive);
      result.push(next.value);
      if (value) return result;
    }

    return result;
  }();
}

module.exports = _curryRight(_takeUntil);
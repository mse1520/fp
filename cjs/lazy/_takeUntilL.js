const releasePromise = require('../internal/releasePromise.js');

const toIterator = require('../internal/toiterator.js');

const catchNoop = require('../internal/catchNoop.js');

const errorNoop = require('../internal/errorNoop.js');

const _curryRight = require('../basic/_curryRight.js');

function* _takeUntilL(iterator, predicate) {
  let promise = Promise.resolve();
  let _while = false;
  iterator = toIterator(iterator);
  let next,
      index = -1;

  while (!(index++, next = iterator.next()).done) {
    const origin = next.value;
    const value = releasePromise(origin, predicate, index);
    yield value instanceof Promise ? catchNoop(promise = promise.then(_ => value).then(value => _while ? Promise.reject(errorNoop) : (_while = value, origin))) : (_while = value, origin);
    if (_while) break;
  }
}

module.exports = _curryRight(_takeUntilL);
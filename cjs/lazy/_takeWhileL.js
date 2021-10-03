const errorNoop = require('../internal/errorNoop.js');

const catchNoop = require('../internal/catchNoop.js');

const toIterator = require('../internal/toiterator.js');

const releasePromise = require('../internal/releasePromise.js');

const _curryRight = require('../basic/_curryRight.js');

function* _takeWhileL(iterator, predicate) {
  let promise = Promise.resolve();
  let _while = true;
  iterator = toIterator(iterator);
  let next,
      index = -1;

  while (!(index++, next = iterator.next()).done) {
    const origin = next.value;
    const value = releasePromise(origin, predicate, index);
    value instanceof Promise ? yield catchNoop(promise = promise.then(_ => value).then(value => (_while = value) ? origin : Promise.reject(errorNoop))) : (_while = value) ? yield origin : undefined;
    if (!_while) break;
  }
}

module.exports = _curryRight(_takeWhileL);
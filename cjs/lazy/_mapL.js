const releasePromise = require('../internal/releasePromise.js');

const toIterator = require('../internal/toiterator.js');

const _curryRight = require('../basic/_curryRight.js');

function* _mapL(iterator, predicate) {
  iterator = toIterator(iterator);
  let index = 0;

  for (const value of iterator) {
    yield releasePromise(value, predicate, index);
    index++;
  }
}

module.exports = _curryRight(_mapL);
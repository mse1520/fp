const releasePromise = require('../internal/releasePromise.js');

const toIterator = require('../internal/toiterator.js');

const _curryRight = require('../basic/_curryRight.js');

function* _mapL(iterator, predicate) {
  iterator = toIterator(iterator);
  let next,
      index = -1;

  while (!(index++, next = iterator.next()).done) yield releasePromise(next.value, predicate, index);
}

;
module.exports = _curryRight(_mapL);
const releasePromise = require('../internal/releasePromise.js');

const toIterator = require('../internal/toiterator.js');

const curryRight = require('../basic/curryRight.js');

function* mapL(iterator, predicate) {
  iterator = toIterator(iterator);
  let next,
      index = -1;

  while (!(index++, next = iterator.next()).done) yield releasePromise(next.value, predicate, index);
}

;
module.exports = curryRight(mapL);
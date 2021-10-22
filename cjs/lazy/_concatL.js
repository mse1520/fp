const toIterator = require('../internal/toiterator.js');

const _curryRight = require('../basic/_curryRight.js');

function* _concatL(iterator, others) {
  iterator = toIterator(iterator);
  others = toIterator(others);
  yield* iterator;
  let next;

  while (!(next = others.next()).done) {
    next.value = toIterator(next.value);
    yield* next.value;
  }
}

module.exports = _curryRight(_concatL);
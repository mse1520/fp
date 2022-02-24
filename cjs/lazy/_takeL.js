const _curryRight = require('../basic/_curryRight.js');

const toIterator = require('../internal/toiterator.js');

function* takeL(iterator, length) {
  if (length < 1) return;
  iterator = toIterator(iterator);

  for (const value of iterator) {
    yield value;
    if (! --length) return;
  }
}

module.exports = _curryRight(takeL);
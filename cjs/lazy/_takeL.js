const _curryRight = require('../basic/_curryRight.js');

const toIterator = require('../internal/toiterator.js');

function* takeL(iterator, length) {
  if (length < 1) return;
  iterator = toIterator(iterator);
  let next;

  while (!(next = iterator.next()).done) {
    yield next.value;
    if (! --length) break;
  }
}

module.exports = _curryRight(takeL);
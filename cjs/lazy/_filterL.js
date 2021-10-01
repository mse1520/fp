const catchNoop = require('../internal/catchNoop.js');

const toIterator = require('../internal/toiterator.js');

const _curryRight = require('../basic/_curryRight.js');

function* _filterL(iterator, predicate) {
  iterator = toIterator(iterator);
  let next,
      index = -1;

  while (!(index++, next = iterator.next()).done) {
    next.value instanceof Promise ? yield catchNoop(next.value.then(value => predicate(value, index) ? value : Promise.reject(errorNoop))) : predicate(next.value, index) ? yield next.value : undefined;
  }
}

;
module.exports = _curryRight(_filterL);
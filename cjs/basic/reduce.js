const noopHandler = require('../internal/noopHandler.js');

const releasePromise = require('../internal/releasePromise.js');

const toIterator = require('../internal/toiterator.js');

const curryRight3To2 = require('./curryRight3To2.js');

const head = require('./head.js');

function reduce(iterator, predicate, accumulate) {
  if (arguments.length < 3) iterator = toIterator(iterator), accumulate = head(iterator);
  iterator = toIterator(iterator);
  return releasePromise(accumulate, function recursive(accumulate, value, index) {
    if (arguments.length > 1) accumulate = predicate(accumulate, value, index);

    let next,
        _index = -1;

    while (!(_index++, next = iterator.next()).done) {
      if (next.value instanceof Promise) {
        return noopHandler(next.value.then(value => recursive(accumulate, value, _index)), () => recursive(accumulate));
      }

      accumulate = predicate(accumulate, next.value, _index);
      if (accumulate instanceof Promise) return accumulate.then(recursive);
    }

    return accumulate;
  });
}

;
module.exports = curryRight3To2(reduce);
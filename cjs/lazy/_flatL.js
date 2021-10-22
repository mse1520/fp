const catchNoop = require('../internal/catchNoop.js');

const errorNoop = require('../internal/errorNoop.js');

const toIterator = require('../internal/toiterator.js');

const curryRightFlat = require('../internal/curryRightFlat.js');

const _last = require('../basic/_last.js');

function* _flatL(iterator, depth = 1) {
  const stack = [toIterator(iterator)];

  while (stack.length) {
    iterator = _last(stack);
    let next = iterator.next();

    if (next.done && stack.length) {
      stack.pop();
      continue;
    }

    if (next.value instanceof Promise) {
      yield catchNoop(next.value.then(value => {
        if (stack.length <= depth && value[Symbol.iterator]) {
          value = toIterator(value);
          stack.push(value);
          next = value.next();
          return next.done ? Promise.reject(errorNoop) : next.value;
        }

        return value;
      }));
    } else if (stack.length <= depth && next.value[Symbol.iterator]) {
      stack.push(next.value[Symbol.iterator]());
      continue;
    } else {
      yield next.value;
    }
  }
}

module.exports = curryRightFlat(_flatL);
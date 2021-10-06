import catchNoop from '../internal/catchNoop.js';
import errorNoop from '../internal/errorNoop.js';
import toIterator from '../internal/toiterator.js';
import _curry1AndOption from '../basic/_curry1AndOption.js';
import _last from '../basic/_last.js';

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

          return next.done ? Promise.reject(errorNoop) : next.value
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

export default _curry1AndOption(_flatL);
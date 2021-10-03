import catchNoop from '../internal/catchNoop.js';
import errorNoop from '../internal/errorNoop.js';
import toIterator from '../internal/toiterator.js';
import _last from '../basic/_last.js';

function _flatL(iterator, depth = 1) {
  const stack = [toIterator(iterator)];

  return {
    next() {
      const _iterator = _last(stack);
      let next = _iterator.next();

      if (next.done && stack.length)
        return !(stack.pop(), stack).length ? { done: true } : this.next();

      if (next.value instanceof Promise) {
        return {
          value: catchNoop(next.value.then(value => {
            if (stack.length <= depth && value[Symbol.iterator]) {
              const _iterator = toIterator(value);
              stack.push(_iterator);
              next = _iterator.next();

              return next.done ? Promise.reject(errorNoop) : next.value;
            }

            return value;
          })),
          done: false
        }
      } else if (stack.length <= depth && next.value[Symbol.iterator]) {
        stack.push(next.value[Symbol.iterator]());
        return this.next();
      }

      return next;
    },
    [Symbol.iterator]() { return this; }
  };
}

export default _flatL;
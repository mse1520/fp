import curryReduce from '@internal/curryReduce';
import noopHandler from '@internal/noopHandler';
import releasePromise from '@internal/releasePromise';
import toIterator from '@internal/toIterator';

interface Reduce {
  /**
   * Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, 
   * where each successive invocation is supplied the return value of the previous. If accumulator is not given, 
   * the first element of collection is used as the initial value. 
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate The function invoked per iteration.
   * @param acc The initial value.
   * @returns accumulated value.
   */
  <T, U>(predicate: (acc: U, cur: T, idx: number) => U | Promise<U>): (iterable: Iterable<T | Promise<T>>) => U | Promise<U>;
  <T, U>(predicate: (acc: U, cur: T, idx: number) => U | Promise<U>, acc: U | Promise<U>): (iterable: Iterable<T | Promise<T>>) => U | Promise<U>;
  <T, U = any>(iterable: Iterable<T | Promise<T>>, predicate: (acc: U, cur: T, idx: number) => U | Promise<U>): U | Promise<U>;
  <T, U>(iterable: Iterable<T | Promise<T>>, predicate: (acc: U, cur: T, idx: number) => U | Promise<U>, acc: U | Promise<U>): U | Promise<U>;
}

function _reduce<T, U>(iterable: Iterable<T | Promise<T>>, predicate: (acc: U, cur: T, idx: number) => U | Promise<U>, acc: U | Promise<U>) {
  const iter = toIterator(iterable);
  let next;
  let idx = -1;

  const recur = (iter: Iterator<T | Promise<T>>, acc: U): U | Promise<U> => {
    while (!(idx++, next = iter.next()).done) {
      if (next.value instanceof Promise) {
        return next.value
          .then(value => predicate(acc, value, idx))
          .then(acc => recur(iter, acc))
          .catch(noopHandler(() => recur(iter, acc)));
      }

      const _acc = predicate(acc, next.value, idx);
      if (_acc instanceof Promise) return _acc.then(acc => recur(iter, acc));
      acc = _acc;
    }

    return acc;
  };

  return releasePromise(acc, acc => recur(iter, acc));
}

const reduce: Reduce = curryReduce(_reduce);

export default reduce;
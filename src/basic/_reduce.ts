import curryReduce from '@internal/curryReduce';
import noopHandler from '@internal/noopHandler';
import releasePromise from '@internal/releasePromise';
import toIterator from '@internal/toIterator';

interface Reduce {
  <T, U>(predicate: (acc: U, cur: T, idx: number) => U | Promise<U>): (iterable: Iterable<T | Promise<T>>) => U | Promise<U>;
  <T, U>(predicate: (acc: U, cur: T, idx: number) => U | Promise<U>, acc: U | Promise<U>): (iterable: Iterable<T | Promise<T>>) => U | Promise<U>;
  <T, U = any>(iterable: Iterable<T | Promise<T>>, predicate: (acc: U, cur: T, idx: number) => U | Promise<U>): U | Promise<U>;
  <T, U>(iterable: Iterable<T | Promise<T>>, predicate: (acc: U, cur: T, idx: number) => U | Promise<U>, acc: U | Promise<U>): U | Promise<U>;
}

function reduce<T, U>(iterable: Iterable<T | Promise<T>>, predicate: (acc: U, cur: T, idx: number) => U | Promise<U>, acc: U | Promise<U>) {
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

const _reduce: Reduce = curryReduce(reduce);

export default _reduce;
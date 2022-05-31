import curryReduce from '@internal/curryReduce';
import noopHandler from '@internal/noopHandler';
import releasePromise from '@internal/releasePromise';
import toIterator from '@internal/toIterator';

interface Reduce {
  <T, R>(predicate: (acc: R, cur: T, idx: number) => R | Promise<R>): (iterable: Iterable<T | Promise<T>>) => R | Promise<R>;
  <T, R>(predicate: (acc: R, cur: T, idx: number) => R | Promise<R>, acc: R | Promise<R>): (iterable: Iterable<T | Promise<T>>) => R | Promise<R>;
  <T, R = any>(iterable: Iterable<T | Promise<T>>, predicate: (acc: R, cur: T, idx: number) => R | Promise<R>): R | Promise<R>;
  <T, R>(iterable: Iterable<T | Promise<T>>, predicate: (acc: R, cur: T, idx: number) => R | Promise<R>, acc: R | Promise<R>): R | Promise<R>;
}

function reduce<T, R>(iterable: Iterable<T | Promise<T>>, predicate: (acc: R, cur: T, idx: number) => R | Promise<R>, acc: R | Promise<R>) {
  const iter = toIterator(iterable);
  let next;
  let idx = -1;

  const recur = (iter: Iterator<T | Promise<T>>, acc: R): R | Promise<R> => {
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
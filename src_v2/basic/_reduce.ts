import curryReduce from '@internal/curryReduce';
import noopHandler from '@internal/noopHandler';
import releasePromise from '@internal/releasePromise';
import _head from './_head';

interface Reduce {
  <T, R>(predicate: (acc: R, cur: T, idx: number) => R): (iterable: Iterable<T | Promise<T>>) => R | Promise<R>;
  <T, R>(predicate: (acc: R, cur: T, idx: number) => R, acc: R | Promise<R>): (iterable: Iterable<T | Promise<T>>) => R | Promise<R>;
  <T, R = any>(iterable: Iterable<T | Promise<T>>, predicate: (acc: R, cur: T, idx: number) => R): R | Promise<R>;
  <T, R>(iterable: Iterable<T | Promise<T>>, predicate: (acc: R, cur: T, idx: number) => R, acc: R | Promise<R>): R | Promise<R>;
}

function reduce<T, R>(iterable: Iterable<T | Promise<T>>, predicate: (acc: R, cur: T, idx: number) => R, acc: R | Promise<R>) {
  const iter = iterable[Symbol.iterator]();
  let next;
  let idx = -1;

  const recur = (iter: Iterator<T | Promise<T>>, acc: R): R | Promise<R> => {
    while (!(idx++, next = iter.next()).done) {
      if (next.value instanceof Promise) {
        return next.value
          .then(value => recur(iter, predicate(acc, value, idx)))
          .catch(noopHandler(() => recur(iter, acc)));
      }

      acc = predicate(acc, next.value, idx);
    }

    return acc;
  };

  return releasePromise(acc, acc => recur(iter, acc));
}

const _reduce: Reduce = curryReduce(reduce);

export default _reduce;
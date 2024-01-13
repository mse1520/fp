import curryReduce from '@internal/curryReduce';
import noopHandler from '@internal/noopHandler';
import passParam from '@internal/passParam';
import toIterator from './toIterator';

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
  <T>(predicate: (acc: any, cur: Awaited<T>, idx: number) => any): (iterable: Iterable<T>) => any;
  <T>(predicate: (acc: any, cur: Awaited<T>, idx: number) => any, acc: any): (iterable: Iterable<T>) => any;
  <T>(iterable: Iterable<T>, predicate: (acc: any, cur: Awaited<T>, idx: number) => any): any;
  <T>(iterable: Iterable<T>, predicate: (acc: any, cur: Awaited<T>, idx: number) => any, acc: any): any;
}

const reduce: Reduce = curryReduce((iterable: Iterable<any>, predicate: (acc: any, cur: any, idx: number) => any, acc: any) => {
  const iter = toIterator(iterable);
  let next;
  let idx = -1;

  const recur = (iter: Iterator<any>, acc: any): any => {
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

  return passParam(acc, acc => recur(iter, acc));
});

export default reduce;
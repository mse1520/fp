import curryReduce from '@internal/curryReduce';
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
  <T, U>(predicate: (acc: U, cur: T, idx: number) => U): (iterable: Iterable<T>) => U;
  <T, U>(predicate: (acc: U, cur: T, idx: number) => U, acc: U): (iterable: Iterable<T>) => U;
  <T, U = any>(iterable: Iterable<T>, predicate: (acc: U, cur: T, idx: number) => U): U;
  <T, U>(iterable: Iterable<T>, predicate: (acc: U, cur: T, idx: number) => U, acc: U): U;
}

const _reduce = <T, U>(iterable: Iterable<T>, predicate: (acc: U, cur: T, idx: number) => U, acc: U) => {
  const iter = toIterator(iterable);
  let next;
  let idx = -1;

  const recur = (iter: Iterator<T>, acc: U): U => {
    while (!(idx++, next = iter.next()).done)
      acc = predicate(acc, next.value, idx);

    return acc;
  };

  return recur(iter, acc);
};

const reduce: Reduce = curryReduce(_reduce);

export default reduce;
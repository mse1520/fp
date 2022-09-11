import reduce from '@basic/reduce';
import curryReduce from '@internal/curryReduce';

interface ReduceC {
  /**
   * Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, 
   * where each successive invocation is supplied the return value of the previous. If accumulator is not given, 
   * the first element of collection is used as the initial value. 
   * Importantly, this is concurrency function.
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

function reduceC<T, U>(iterable: Iterable<T | Promise<T>>, predicate: (acc: U, cur: T, idx: number) => U | Promise<U>, acc: U | Promise<U>) {
  return reduce([...iterable], predicate, acc);
}

const _reduceC: ReduceC = curryReduce(reduceC);

export default _reduceC;
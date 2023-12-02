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
  <T>(predicate: (acc: any, cur: Awaited<T>, idx: number) => any): (iterable: Iterable<T>) => any;
  <T>(predicate: (acc: any, cur: Awaited<T>, idx: number) => any, acc: any): (iterable: Iterable<T>) => any;
  <T>(iterable: Iterable<T>, predicate: (acc: any, cur: Awaited<T>, idx: number) => any): any;
  <T>(iterable: Iterable<T>, predicate: (acc: any, cur: Awaited<T>, idx: number) => any, acc: any): any;
}

const reduceC: ReduceC = curryReduce(<T>(iterable: Iterable<T>, predicate: (acc: any, cur: Awaited<T>, idx: number) => any, acc: any) =>
  reduce([...iterable], predicate, acc));

export default reduceC;
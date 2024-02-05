import takeWhileL from '@lazy/takeWhileL';
import takeAllC from './takeAllC';
import curryRight from '@basic/curryRight';

interface TakeWhileC {
  /**
   * Creates a slice of array with n elements taken from the beginning. Elements are taken until predicate returns falsey.
   * Importantly, this is concurrency function.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate the function invoked per iteration.
   * @returns Returns the slice of array.
   */
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any): any;
  <T>(predicate: (value: Awaited<T>, index: number) => any): (iterable: Iterable<T>) => any;
}

const takeWhileC: TakeWhileC = curryRight(<T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any) =>
  takeAllC(takeWhileL(iterable, predicate)));

export default takeWhileC;
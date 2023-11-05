import curryRight from '@basic/curryRight';
import filterL from '@lazy/filterL';
import takeAllC from './takeAllC';

interface FilterC {
  /**
   * Iterates over elements of collection, returning a new array of all elements predicate returns. truthy for.
   * Importantly, this is concurrency function.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate the function invoked per iteration.
   * @returns Returns the new filtered array.
   */
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T | Promise<T>>) => T[] | Promise<T[]>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): T[] | Promise<T[]>;
}

function _filterC<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  return takeAllC(filterL(iterable, predicate));
}

const filterC: FilterC = curryRight(_filterC);

export default filterC;
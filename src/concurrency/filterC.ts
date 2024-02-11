import curryRight from '@basic/curryRight';
import filterL from '@lazy/filterL';
import takeAllC from './takeAllC';

interface FilterC {
  <T>(predicate: (value: Awaited<T>, index: number) => any): (iterable: Iterable<T>) => any;
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any): any;
}

/**
 * Iterates over elements of collection, returning a new array of all elements predicate returns. truthy for.
 * Importantly, this is concurrency function.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @param predicate the function invoked per iteration.
 * @returns Returns the new filtered array.
 */
const filterC: FilterC = curryRight(<T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any) =>
  takeAllC(filterL(iterable, predicate)));

export default filterC;
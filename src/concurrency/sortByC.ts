import curryRight from '@basic/curryRight';
import passParam from '@internal/passParam';
import takeAllC from './takeAllC';

interface SortByC {
  <T>(iterable: Iterable<T>, predicate: (a: Awaited<T>, b: Awaited<T>) => number): any;
  <T>(predicate: (a: Awaited<T>, b: Awaited<T>) => number): (iterable: Iterable<T>) => any;
}

/**
 * Creates a sorted array of elements.
 * Importantly, this is concurrency function.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @param predicate a function that defines the sort order.
 * @returns Returns the sorted array.
 */
const sortByC: SortByC = curryRight(<T>(iterable: Iterable<T>, predicate: (a: any, b: any) => number) =>
  passParam(takeAllC(iterable), arr => arr.sort(predicate)));

export default sortByC;
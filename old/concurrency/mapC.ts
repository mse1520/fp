import curryRight from '@basic/curryRight';
import mapL from '@lazy/mapL';
import takeAllC from './takeAllC';

interface MapC {
  /**
   * The mapC method creates a new array populated with the results of calling a provided function on every element in the calling Iterable.
   * Importantly, this is concurrency function.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate Function that is called for every element of iterable. Each time callbackFn executes, the returned value is added to new array.
   * @returns new array.
   */
  <T, U>(predicate: (value: Awaited<T>, index: number) => U): (iterable: Iterable<T>) => T extends Promise<any> ? Promise<U[]> : U[];
  <T, U>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => U): T extends Promise<any> ? Promise<U[]> : U[];
}

function _mapC<T, U>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => U) {
  return takeAllC(mapL(iterable, predicate));
}

const mapC: MapC = curryRight(_mapC);

export default mapC;
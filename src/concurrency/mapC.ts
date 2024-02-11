import curryRight from '@basic/curryRight';
import mapL from '@lazy/mapL';
import takeAllC from './takeAllC';

interface MapC {
  <T>(predicate: (value: Awaited<T>, index: number) => any): (iterable: Iterable<T>) => any;
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any): any;
}

/**
 * The mapC method creates a new array populated with the results of calling a provided function on every element in the calling Iterable.
 * Importantly, this is concurrency function.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @param predicate Function that is called for every element of iterable. Each time callbackFn executes, the returned value is added to new array.
 * @returns new array.
 */
const mapC: MapC = curryRight(<T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any) => takeAllC(mapL(iterable, predicate)));

export default mapC;
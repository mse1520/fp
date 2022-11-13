import curryRight from './curryRight';
import takeAll from './takeAll';
import mapL from '@lazy/mapL';

interface ForEach {
  /**
   * The forEach method executes a provided function once for each iterable element.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol
   * @param predicate Function that is called for every element of iterable. Each time callbackFn executes.
   * @returns new array exactly like the original
   */
  <T>(predicate: (value: Awaited<T>, index: number) => void): (iterable: Iterable<T>) => T[];
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => void): T[];
}

function _forEach<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => void) {
  return takeAll(
    mapL(iterable, (value, index) => (predicate(value, index), value))
  );
}

const forEach: ForEach = curryRight(_forEach);

export default forEach;
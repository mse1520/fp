import _curryRight from './_curryRight';
import _takeAll from './_takeAll';
import mapL from '@lazy/mapL';

interface ForEach {
  /**
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * The forEach method executes a provided function once for each iterable element.
   * @param iterable conforms to the iterable protocol
   * @param predicate Function that is called for every element of iterable. Each time callbackFn executes.
   * @returns new array exactly like the original
   */
  <T>(predicate: (value: T, index: number) => void): (iterable: Iterable<T | Promise<T>>) => T[] | Promise<T[]>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => void): T[] | Promise<T[]>;
}

function _forEach<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => void) {
  return _takeAll(
    mapL(iterable, (value, index) => (predicate(value, index), value))
  );
}

const forEach: ForEach = _curryRight(_forEach);

export default forEach;
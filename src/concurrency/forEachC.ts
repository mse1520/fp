import _curryRight from '@basic/_curryRight';
import mapL from '@lazy/mapL';
import _takeAllC from './_takeAllC';

interface ForEachC {
  /**
   * Importantly, this is concurrency function.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * The forEachC method executes a provided function once for each iterable element.
   * @param iterable conforms to the iterable protocol
   * @param predicate Function that is called for every element of iterable. Each time callbackFn executes.
   * @returns new array exactly like the original
   */
  <T>(predicate: (value: T, index: number) => void): (iterable: Iterable<T | Promise<T>>) => T[] | Promise<T[]>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => void): T[] | Promise<T[]>;
}

function _forEachC<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => void) {
  return _takeAllC(
    mapL(iterable, (value, index) => (predicate(value, index), value))
  );
}

const forEachC: ForEachC = _curryRight(_forEachC);

export default forEachC;
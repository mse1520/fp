import curryRight from '@basic/curryRight';
import mapL from '@lazy/mapL';
import takeAllC from './takeAllC';

interface ForEachC {
  /**
   * The forEachC method executes a provided function once for each iterable element.
   * Importantly, this is concurrency function.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol
   * @param predicate Function that is called for every element of iterable. Each time callbackFn executes.
   * @returns new array exactly like the original
   */
  <T>(predicate: (value: T, index: number) => void): (iterable: Iterable<T | Promise<T>>) => T[] | Promise<T[]>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => void): T[] | Promise<T[]>;
}

function _forEachC<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => void) {
  return takeAllC(
    mapL(iterable, (value, index) => (predicate(value, index), value))
  );
}

const forEachC: ForEachC = curryRight(_forEachC);

export default forEachC;
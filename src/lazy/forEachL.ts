import curryRight from '@basic/curryRight';
import mapL from './mapL';

interface ForEachL {
  /**
   * The forEachL method creates a Generator executes a provided function once for each iterable element.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol
   * @param predicate Function that is called for every element of iterable. Each time callbackFn executes.
   * @returns Generator
   */
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T | Promise<T>>) => Generator<T | Promise<T>, void>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): Generator<T | Promise<T>, void>;
}

function _forEachL<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  return mapL(iterable, (value, index) => (predicate(value, index), value));
}

const forEachL: ForEachL = curryRight(_forEachL);

export default forEachL;
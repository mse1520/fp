import _curryRight from '@basic/_curryRight';
import filterL from './filterL';

interface RejectL {
  /**
   * Iterates over elements of collection, returning a Generator of all elements predicate not returns. truthy for.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate the function invoked per iteration.
   * @returns Returns the new filtered Generator.
   */
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T | Promise<T>>) => Generator<T | Promise<T>, void>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): Generator<T | Promise<T>, void>;
}

function _rejectL<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  return filterL(iterable, (value, index) => !predicate(value, index));
}

const rejectL: RejectL = _curryRight(_rejectL);

export default rejectL;
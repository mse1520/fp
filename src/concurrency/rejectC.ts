import curryRight from '@basic/curryRight';
import filterL from '@lazy/filterL';
import takeAllC from './takeAllC';

interface RejectC {
  /**
   * This method returns the elements of collection that predicate does not return truthy for.
   * * Importantly, this is concurrency function.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate the function invoked per iteration.
   * @returns Returns the new filtered array.
   */
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T | Promise<T>>) => Generator<T | Promise<T>, void>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): Generator<T | Promise<T>, void>;
}

function _rejectC<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  return takeAllC(filterL(iterable, (value, index) => !predicate(value, index)));
}

const rejectC: RejectC = curryRight(_rejectC);

export default rejectC;
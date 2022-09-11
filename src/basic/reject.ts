import curryRight from '@basic/curryRight';
import filterL from '@lazy/filterL';
import takeAll from './takeAll';

interface Reject {
  /**
   * This method returns the elements of collection that predicate does not return truthy for.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate the function invoked per iteration.
   * @returns Returns the new filtered array.
   */
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T | Promise<T>>) => Generator<T | Promise<T>, void>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): Generator<T | Promise<T>, void>;
}

function _reject<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  return takeAll(filterL(iterable, (value, index) => !predicate(value, index)));
}

const reject: Reject = curryRight(_reject);

export default reject;
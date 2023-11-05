import curryRight from './curryRight';
import takeAll from './takeAll';
import filterL from '@lazy/filterL';

interface Filter {
  /**
   * Iterates over elements of collection, returning a new array of all elements predicate returns. truthy for.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate the function invoked per iteration.
   * @returns Returns the new filtered array.
   */
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T>) => T[];
  <T>(iterable: Iterable<T>, predicate: (value: T, index: number) => any): T[];
}

const _filter = <T>(iterable: Iterable<T>, predicate: (value: T, index: number) => any) => takeAll(filterL(iterable, predicate));

const filter: Filter = curryRight(_filter);

export default filter;
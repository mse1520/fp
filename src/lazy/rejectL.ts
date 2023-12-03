import curryRight from '@basic/curryRight';
import filterL from './filterL';

interface RejectL {
  /**
   * This method returns the elements of collection that predicate does not return truthy for.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate the function invoked per iteration.
   * @returns Returns the new filtered Generator.
   */
  <T>(predicate: (value: Awaited<T>, index: number) => any): (iterable: Iterable<T>) => Generator<T, void>;
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any): Generator<T, void>;
}

const rejectL: RejectL = curryRight(<T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any) =>
  filterL(iterable, (value, index) => !predicate(value, index)));

export default rejectL;
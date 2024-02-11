import curryRight from '@basic/curryRight';
import takeWhile from './takeWhile';

interface TakeUntil {
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any): any;
  <T>(predicate: (value: Awaited<T>, index: number) => any): (iterable: Iterable<T>) => any;
}

/**
 * Creates a slice of array with n elements taken from the beginning. Elements are taken until predicate returns truthy.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @param predicate the function invoked per iteration.
 * @returns Returns the slice of array.
 */
const takeUntil: TakeUntil = curryRight(<T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any) =>
  takeWhile(iterable, (v, i) => !predicate(v, i)));

export default takeUntil;
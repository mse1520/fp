import curryRight from '@basic/curryRight';
import takeWhileL from './takeWhileL';

interface TakeUntilL {
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any): Generator<T, void>;
  <T>(predicate: (value: Awaited<T>, index: number) => any): (iterable: Iterable<T>) => Generator<T, void>;
}

/**
 * Creates a Generator with n elements taken from the beginning. Elements are taken until predicate returns truthy.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @param predicate the function invoked per iteration.
 * @returns Generator
 */
const takeUntilL: TakeUntilL = curryRight(<T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any) =>
  takeWhileL(iterable, (v, i) => !predicate(v, i)));

export default takeUntilL;
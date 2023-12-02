import curryRight from '@basic/curryRight';
import mapL from './mapL';
import tap from '@basic/tap';

interface ForEachL {
  /**
   * The forEachL method creates a Generator executes a provided function once for each iterable element.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol
   * @param predicate Function that is called for every element of iterable. Each time callbackFn executes.
   * @returns Generator
   */
  <T>(predicate: (value: Awaited<T>, index: number) => any): (iterable: Iterable<T>) => Generator<T, void>;
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any): Generator<T, void>;
}

const forEachL: ForEachL = curryRight(<T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any) => mapL(iterable, tap(predicate)));

export default forEachL;
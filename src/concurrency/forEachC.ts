import curryRight from '@basic/curryRight';
import takeAllC from './takeAllC';
import forEachL from '@lazy/forEachL';

interface ForEachC {
  /**
   * The forEachC method executes a provided function once for each iterable element.
   * Importantly, this is concurrency function.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol
   * @param predicate Function that is called for every element of iterable. Each time callbackFn executes.
   * @returns new array exactly like the original
   */
  <T>(predicate: (value: Awaited<T>, index: number) => any): (iterable: Iterable<T>) => any;
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any): any;
}

const forEachC: ForEachC = curryRight(<T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any) =>
  takeAllC(forEachL(iterable, (value, index) => predicate(value, index))));

export default forEachC;
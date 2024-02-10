import passParam from '@internal/passParam';
import curryRight from '@basic/curryRight';
import toIterator from '@basic/toIterator';

interface MapL {
  /**
   * The mapL method creates a Generator populated with the results of calling a provided function on every element in the calling Iterable.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol
   * @param predicate Function that is called for every element of iterable. Each time callbackFn executes, the returned value is added to new Generator.
   * @returns Generator
   */
  <T, U>(predicate: (value: Awaited<T>, index: number) => U): (iterable: Iterable<T>) => Generator<U, void>;
  <T, U>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => U): Generator<U, void>;
}

const mapL: MapL = curryRight(function* (iterable: Iterable<any>, predicate: (value: any, index: number) => any) {
  let index = -1;
  for (const value of toIterator(iterable))
    yield passParam(value, (value: any) => (index++, predicate(value, index)));
});

export default mapL;
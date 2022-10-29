import releasePromise from '@internal/releasePromise';
import curryRight from '@basic/curryRight';

interface MapL {
  /**
   * The mapL method creates a Generator populated with the results of calling a provided function on every element in the calling Iterable.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol
   * @param predicate Function that is called for every element of iterable. Each time callbackFn executes, the returned value is added to new Generator.
   * @returns Generator
   */
  <T, U>(predicate: (value: Awaited<T>, index: number) => U): (iterable: Iterable<T>) => T extends Promise<any> ? Generator<Promise<U>, void> : Generator<U, void>;
  <T, U = any>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => U): T extends Promise<any> ? Generator<Promise<U>, void> : Generator<U, void>;
}

function* _mapL<T, U>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => U) {
  let index = 0;
  for (const value of iterable) {
    yield releasePromise(value, predicate, index);
    index++;
  }
}

const mapL: MapL = curryRight(_mapL);

export default mapL;
import passParam from '@internal/passParam';
import curryRight from '@basic/curryRight';

interface MapL {
  /**
   * The mapL method creates a Generator populated with the results of calling a provided function on every element in the calling Iterable.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol
   * @param predicate Function that is called for every element of iterable. Each time callbackFn executes, the returned value is added to new Generator.
   * @returns Generator
   */
  <T>(predicate: (value: Awaited<T>, index: number) => any): (iterable: Iterable<T>) => Generator<any, void>;
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any): Generator<any, void>;
}

const mapL: MapL = curryRight(function* (iterable: Iterable<any>, predicate: (value: any, index: number) => any) {
  let index = 0;
  for (const value of iterable) {
    yield passParam(value, predicate, index);
    index++;
  }
});

export default mapL;
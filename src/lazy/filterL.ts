import nop from '@internal/nop';
import curryRight from '@basic/curryRight';
import catchNoop from '@internal/catchNoop';
import toIterator from '@basic/toIterator';

interface FilterL {
  /**
   * Iterates over elements of collection, returning a Generator of all elements predicate returns. truthy for.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate the function invoked per iteration.
   * @returns Returns the new filtered Generator.
   */
  <T>(predicate: (value: Awaited<T>, index: number) => any): (iterable: Iterable<T>) => Generator<T, void>;
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any): Generator<T, void>;
}

const filterL: FilterL = curryRight(function* (iterable: Iterable<any>, predicate: (value: any, index: number) => any) {
  let index = 0;
  for (const value of toIterator(iterable)) {
    if (value instanceof Promise)
      yield catchNoop(value.then(value => !predicate(value, index) ? Promise.reject(nop) : value));
    else if (predicate(value, index))
      yield value;

    index++;
  }
});

export default filterL;
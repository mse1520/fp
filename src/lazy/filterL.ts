import curryRight from '@basic/curryRight';

interface FilterL {
  /**
   * Iterates over elements of collection, returning a Generator of all elements predicate returns. truthy for.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate the function invoked per iteration.
   * @returns Returns the new filtered Generator.
   */
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T>) => Generator<T, void>;
  <T>(iterable: Iterable<T>, predicate: (value: T, index: number) => any): Generator<T, void>;
}

function* _filterL<T>(iterable: Iterable<T>, predicate: (value: T, index: number) => any) {
  let index = 0;
  for (const value of iterable) {
    if (predicate(value, index))
      yield value;

    index++;
  }
}

const filterL: FilterL = curryRight(_filterL);

export default filterL;
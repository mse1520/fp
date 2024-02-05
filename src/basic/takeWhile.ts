import passParam from '@internal/passParam';
import toIterator from './toIterator';
import noopHandler from '@internal/noopHandler';
import curryRight from './curryRight';

interface TakeWhile {
  /**
   * Creates a slice of array with n elements taken from the beginning. Elements are taken until predicate returns falsey.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate the function invoked per iteration.
   * @returns Returns the slice of array.
   */
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any): any;
  <T>(predicate: (value: Awaited<T>, index: number) => any): (iterable: Iterable<T>) => any;
}

const takeWhile: TakeWhile = curryRight(<T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any) => {
  const result: T[] = [];
  const iter = toIterator(iterable);
  let next: IteratorResult<T>;
  let index = -1;

  const recur = (): T[] | Promise<Awaited<T>[]> => {
    while (!(index++, next = iter.next()).done) {
      const cond = passParam(next.value, predicate, index);

      if (cond instanceof Promise)
        return Promise.all([cond, next.value])
          .then(([cond, value]) => cond ? (result.push(value), recur()) : result)
          .catch(noopHandler(recur));

      if (!cond) return result;

      result.push(next.value);
    }

    return result;
  };

  return recur();
});

export default takeWhile;
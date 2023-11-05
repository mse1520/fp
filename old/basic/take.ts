import noopHandler from '@internal/noopHandler';
import toIterator from '@internal/toIterator';
import curryRight from './curryRight';

interface Take {
  /**
   * Creates a slice of array with n elements taken from the beginning.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param length The number of elements to take.
   * @returns Returns the slice of array.
   */
  (length: number): <T>(iterable: Iterable<T | Promise<T>>) => T[] | Promise<T[]>;
  <T>(iterable: Iterable<T | Promise<T>>, length: number): T[] | Promise<T[]>;
}

function _take<T>(iterable: Iterable<T | Promise<T>>, length: number) {
  const result: T[] = [];
  const iter = toIterator(iterable);
  let next;

  return function recur(): T[] | Promise<T[]> {
    while (!(next = iter.next()).done) {
      if (next.value instanceof Promise) {
        return next.value
          .then(value => (result.push(value), result))
          .then(result => result.length === length ? result : recur())
          .catch(noopHandler(recur));
      }

      result.push(next.value);
      if (result.length === length) return result;
    }

    return result;
  }();
}

const take: Take = curryRight(_take);

export default take;
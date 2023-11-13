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
  (length: number): (iterable: Iterable<any>) => any;
  (iterable: Iterable<any>, length: number): any;
}

const take: Take = curryRight((iterable: Iterable<any>, length: number) => {
  const result: any[] = [];
  const iter = toIterator(iterable);
  let next: IteratorResult<any>;

  const recur = (): any[] | Promise<any[]> => {
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
  };

  return recur();
});

export default take;
import noopHandler from '@internal/noopHandler';
import toIterator from '@internal/toIterator';
import _curryRight from './_curryRight';

interface Take {
  (length: number): <T>(iterable: Iterable<T | Promise<T>>) => T[] | Promise<T[]>;
  <T>(iterable: Iterable<T | Promise<T>>, length: number): T[] | Promise<T[]>;
}

function take<T>(iterable: Iterable<T | Promise<T>>, length: number) {
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

const _take: Take = _curryRight(take);

export default _take;
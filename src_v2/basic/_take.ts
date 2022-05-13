import errorNoop from '@internal/errorNoop';
import _curryRight from './_curryRight';

interface Take {
  (length: number): <T>(iterator: Iterable<T | Promise<T>>) => T[] | Promise<T[]>;
  <T>(iterator: Iterable<T | Promise<T>>, length: number): T[] | Promise<T[]>;
}

function take<T>(iterator: Iterable<T | Promise<T>>, length: number): T[] | Promise<T[]> {
  const result: T[] = [];
  const iter = iterator[Symbol.iterator]();

  return function recursive(): T[] | Promise<T[]> {
    let next;
    while (!(next = iter.next()).done) {
      if (next.value instanceof Promise) {
        return next.value
          .then((value: T) => (result.push(value), result))
          .then(result => result.length === length ? result : recursive())
          .catch(error => error === errorNoop ? recursive() : Promise.reject(error));
      }

      result.push(next.value);
      if (result.length === length) return result;
    }

    return result;
  }();
}

const _take: Take = _curryRight(take);

export default _take;
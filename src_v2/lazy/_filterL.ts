import errorNoop from '@internal/errorNoop';
import _curryRight from '@basic/_curryRight';
import noop from '@internal/noop';

interface FilterL {
  <T>(predicate: (value: T, index: number) => any): (Iterator: Iterable<T | Promise<T>>) => Generator<T | Promise<T | undefined>, void>;
  <T>(iterator: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): Generator<T | Promise<T | undefined>, void>;
}

function* filterL<T>(iterator: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  let index = 0;
  for (const value of iterator) {
    if (value instanceof Promise)
      yield value.then(value => predicate(value, index) ? value : Promise.reject(errorNoop)).catch(noop);
    else if (predicate(value, index))
      yield value;

    index++;
  }
}

const _filterL: FilterL = _curryRight(filterL);

export default _filterL;
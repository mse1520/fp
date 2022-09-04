import errorNoop from '@internal/errorNoop';
import _curryRight from '@basic/_curryRight';
import catchNoop from '@internal/catchNoop';

interface FilterL {
  <T>(predicate: (value: T, index: number) => any): (iterable: Iterable<T | Promise<T>>) => Generator<T | Promise<T>, void>;
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any): Generator<T | Promise<T>, void>;
}

function* filterL<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => any) {
  let index = 0;
  for (const value of iterable) {
    if (value instanceof Promise)
      yield catchNoop(value.then(value => predicate(value, index) ? value : Promise.reject(errorNoop)));
    else if (predicate(value, index))
      yield value;

    index++;
  }
}

const _filterL: FilterL = _curryRight(filterL);

export default _filterL;